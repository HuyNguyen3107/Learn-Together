import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import GameBoard from "../components/GameBoard";
import ScoreBoard from "../components/ScoreBoard";
import Timer from "../components/Timer";
import GameControls from "../components/GameControls";
import GameOver from "../components/GameOver";
import { useGameLogic } from "../hooks/useGameLogic";
import "./GamePage.css";

const GamePage = ({ onViewHighScores }) => {
  const [difficulty, setDifficulty] = useState("easy");

  const {
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
    totalPairs,
  } = useGameLogic(difficulty);

  const handleDifficultyChange = (newDifficulty) => {
    setDifficulty(newDifficulty);
  };

  const handleStart = () => {
    if (gameState === "ready") {
      startGame();
    }
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, y: -20 },
  };

  const childVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="game-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Header gameState={gameState} />

      <div className="game-container">
        <motion.div className="game-info" variants={childVariants}>
          <Timer time={time} gameState={gameState} />
          <ScoreBoard
            score={score}
            moves={moves}
            matchedPairs={matchedPairs}
            totalPairs={totalPairs}
            streak={streak}
          />
        </motion.div>

        <motion.div className="game-controls-section" variants={childVariants}>
          <GameControls
            difficulty={difficulty}
            onDifficultyChange={handleDifficultyChange}
            onRestart={restartGame}
            onTogglePause={togglePause}
            gameState={gameState}
          />
        </motion.div>

        <motion.div className="game-board-section" variants={childVariants}>
          {gameState === "ready" && (
            <motion.div
              className="start-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.button
                className="start-btn"
                onClick={handleStart}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(102, 126, 234, 0.4)",
                    "0 0 0 20px rgba(102, 126, 234, 0)",
                    "0 0 0 0 rgba(102, 126, 234, 0.4)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <span className="start-icon">🚀</span>
                <span>Bắt đầu chơi</span>
              </motion.button>
            </motion.div>
          )}

          {gameState === "paused" && (
            <motion.div
              className="pause-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="pause-message">
                <h3>⏸️ Game đã tạm dừng</h3>
                <p>Nhấn "Tiếp tục" để chơi tiếp</p>
              </div>
            </motion.div>
          )}

          <GameBoard
            cards={cards}
            onCardClick={handleCardClick}
            selectedCards={selectedCards}
            difficulty={difficulty}
          />
        </motion.div>
      </div>

      <AnimatePresence>
        {gameState === "over" && (
          <GameOver
            score={score}
            moves={moves}
            time={time}
            difficulty={difficulty}
            onRestart={restartGame}
            onViewHighScores={onViewHighScores}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default GamePage;
