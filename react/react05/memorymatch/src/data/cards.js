// Dữ liệu thẻ bài cho trò chơi MemoryMatch
export const cardImages = [
  { id: 1, emoji: "🐶", name: "dog" },
  { id: 2, emoji: "🐱", name: "cat" },
  { id: 3, emoji: "🐸", name: "frog" },
  { id: 4, emoji: "🦋", name: "butterfly" },
  { id: 5, emoji: "🌸", name: "flower" },
  { id: 6, emoji: "🍎", name: "apple" },
  { id: 7, emoji: "🎈", name: "balloon" },
  { id: 8, emoji: "⭐", name: "star" },
  { id: 9, emoji: "🎯", name: "target" },
  { id: 10, emoji: "🎮", name: "game" },
  { id: 11, emoji: "🎭", name: "mask" },
  { id: 12, emoji: "🎪", name: "circus" },
  { id: 13, emoji: "🎨", name: "art" },
  { id: 14, emoji: "🎭", name: "theater" },
  { id: 15, emoji: "🏆", name: "trophy" },
  { id: 16, emoji: "💎", name: "diamond" },
  { id: 17, emoji: "🌟", name: "sparkle" },
  { id: 18, emoji: "🔥", name: "fire" },
];

// Cấu hình độ khó
export const difficultyLevels = {
  easy: {
    name: "Dễ",
    gridSize: { rows: 4, cols: 4 },
    pairs: 8,
    timeBonus: 100,
  },
  medium: {
    name: "Trung bình",
    gridSize: { rows: 4, cols: 6 },
    pairs: 12,
    timeBonus: 150,
  },
  hard: {
    name: "Khó",
    gridSize: { rows: 6, cols: 6 },
    pairs: 18,
    timeBonus: 200,
  },
};

// Tạo bộ thẻ cho game
export const createGameCards = (difficulty) => {
  const level = difficultyLevels[difficulty];
  const selectedCards = cardImages.slice(0, level.pairs);

  // Tạo cặp thẻ (mỗi thẻ xuất hiện 2 lần)
  const gameCards = [];
  selectedCards.forEach((card) => {
    gameCards.push(
      { ...card, uniqueId: `${card.id}-1`, isFlipped: false, isMatched: false },
      { ...card, uniqueId: `${card.id}-2`, isFlipped: false, isMatched: false }
    );
  });

  // Xáo trộn thẻ
  return shuffleArray(gameCards);
};

// Hàm xáo trộn mảng
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
