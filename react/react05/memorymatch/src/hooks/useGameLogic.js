import { useState, useEffect, useCallback } from "react";
import { createGameCards } from "../data/cards";
import { calculateScore, delay, sounds } from "../utils/helpers";

export const useGameLogic = (difficulty = "easy") => {
  const [gameState, setGameState] = useState("ready"); // ready, playing, paused, over
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);

  // Khởi tạo game
  const initGame = useCallback(() => {
    const newCards = createGameCards(difficulty);
    setCards(newCards);
    setSelectedCards([]);
    setMatchedPairs(0);
    setMoves(0);
    setTime(0);
    setScore(0);
    setStreak(0);
    setGameState("ready");
  }, [difficulty]);

  // Bắt đầu game
  const startGame = useCallback(() => {
    setGameState("playing");
    setTime(0);
  }, []);

  // Restart game
  const restartGame = useCallback(() => {
    initGame();
  }, [initGame]);

  // Pause/Resume game
  const togglePause = useCallback(() => {
    setGameState((prev) => (prev === "playing" ? "paused" : "playing"));
  }, []);

  // Timer effect
  useEffect(() => {
    let interval;
    if (gameState === "playing") {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameState]);

  // Xử lý click thẻ
  const handleCardClick = useCallback(
    async (cardIndex) => {
      if (gameState !== "playing") return;

      const card = cards[cardIndex];
      if (card.isFlipped || card.isMatched || selectedCards.length >= 2) return;

      // Bắt đầu game nếu chưa bắt đầu
      if (gameState === "ready") {
        startGame();
      }

      // Lật thẻ
      setCards((prev) =>
        prev.map((c, index) =>
          index === cardIndex ? { ...c, isFlipped: true } : c
        )
      );

      sounds.flip();

      const newSelectedCards = [
        ...selectedCards,
        { ...card, index: cardIndex },
      ];
      setSelectedCards(newSelectedCards);

      // Nếu đã chọn 2 thẻ
      if (newSelectedCards.length === 2) {
        setMoves((prev) => prev + 1);

        const [firstCard, secondCard] = newSelectedCards;

        // Delay để người chơi thấy được 2 thẻ
        await delay(800);

        if (firstCard.id === secondCard.id) {
          // Match!
          setCards((prev) =>
            prev.map((c) =>
              c.uniqueId === firstCard.uniqueId ||
              c.uniqueId === secondCard.uniqueId
                ? { ...c, isMatched: true }
                : c
            )
          );

          setMatchedPairs((prev) => prev + 1);
          setStreak((prev) => prev + 1);
          sounds.match();

          // Tính điểm
          const currentScore = calculateScore(
            moves + 1,
            time,
            difficulty,
            streak * 10
          );
          setScore(currentScore);
        } else {
          // Không match
          setCards((prev) =>
            prev.map((c) =>
              c.uniqueId === firstCard.uniqueId ||
              c.uniqueId === secondCard.uniqueId
                ? { ...c, isFlipped: false }
                : c
            )
          );

          setStreak(0);
          sounds.wrong();
        }

        setSelectedCards([]);
      }
    },
    [
      cards,
      selectedCards,
      gameState,
      moves,
      time,
      difficulty,
      streak,
      startGame,
    ]
  );

  // Kiểm tra thắng
  useEffect(() => {
    const totalPairs = cards.length / 2;
    if (
      matchedPairs > 0 &&
      matchedPairs === totalPairs &&
      gameState === "playing"
    ) {
      setGameState("over");
      sounds.win();

      // Tính điểm cuối cùng
      const finalScore = calculateScore(moves, time, difficulty, streak * 10);
      setScore(finalScore);
    }
  }, [matchedPairs, cards.length, gameState, moves, time, difficulty, streak]);

  // Initialize game on mount or difficulty change
  useEffect(() => {
    initGame();
  }, [initGame]);

  return {
    gameState,
    cards,
    selectedCards,
    matchedPairs,
    moves,
    time,
    score,
    streak,
    handleCardClick,
    startGame,
    restartGame,
    togglePause,
    totalPairs: cards.length / 2,
  };
};
