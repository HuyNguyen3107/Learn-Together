// Hàm tiện ích cho MemoryMatch

// Tính điểm dựa trên thời gian và số lượt
export const calculateScore = (
  moves,
  timeElapsed,
  difficulty,
  streakBonus = 0
) => {
  const baseScore = 1000;
  const movePenalty = Math.max(0, moves - 10) * 5; // Phạt điểm nếu quá nhiều lượt
  const timePenalty = Math.floor(timeElapsed / 10) * 2; // Phạt điểm theo thời gian
  const difficultyBonus = {
    easy: 0,
    medium: 200,
    hard: 500,
  };

  const finalScore = Math.max(
    0,
    baseScore +
      difficultyBonus[difficulty] +
      streakBonus -
      movePenalty -
      timePenalty
  );

  return finalScore;
};

// Format thời gian thành mm:ss
export const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
};

// Lưu điểm cao vào localStorage
export const saveHighScore = (score, playerName, difficulty) => {
  const highScores = getHighScores();
  const newScore = {
    id: Date.now(),
    score,
    playerName: playerName || "Ẩn danh",
    difficulty,
    date: new Date().toLocaleDateString("vi-VN"),
  };

  highScores.push(newScore);
  highScores.sort((a, b) => b.score - a.score);

  // Chỉ giữ lại top 10
  const topScores = highScores.slice(0, 10);
  localStorage.setItem("memoryMatchHighScores", JSON.stringify(topScores));

  return topScores;
};

// Lấy danh sách điểm cao
export const getHighScores = () => {
  try {
    const scores = localStorage.getItem("memoryMatchHighScores");
    return scores ? JSON.parse(scores) : [];
  } catch (error) {
    console.error("Lỗi khi đọc điểm cao:", error);
    return [];
  }
};

// Kiểm tra xem có phải điểm cao mới không
export const isNewHighScore = (score) => {
  const highScores = getHighScores();
  if (highScores.length < 10) return true;
  return score > highScores[highScores.length - 1].score;
};

// Tạo hiệu ứng rung
export const createShakeEffect = () => {
  return {
    x: [0, -5, 5, -5, 5, 0],
    transition: { duration: 0.5 },
  };
};

// Tạo hiệu ứng bounce khi match
export const createBounceEffect = () => {
  return {
    scale: [1, 1.1, 0.9, 1.05, 1],
    transition: { duration: 0.6 },
  };
};

// Delay helper
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Âm thanh đơn giản (Web Audio API)
export const playSound = (frequency, duration = 100, type = "sine") => {
  try {
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = type;

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      audioContext.currentTime + duration / 1000
    );

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration / 1000);
  } catch (error) {
    // Âm thanh không khả dụng
    console.log("Audio not available");
  }
};

// Âm thanh cho các sự kiện
export const sounds = {
  flip: () => playSound(400, 100),
  match: () => playSound(600, 200),
  wrong: () => playSound(200, 300),
  win: () => {
    // Tạo melody thắng
    setTimeout(() => playSound(523, 200), 0); // C
    setTimeout(() => playSound(659, 200), 100); // E
    setTimeout(() => playSound(784, 200), 200); // G
    setTimeout(() => playSound(1047, 400), 300); // C high
  },
};
