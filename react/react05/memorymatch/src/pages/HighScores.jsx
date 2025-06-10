import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getHighScores } from "../utils/helpers";
import "./HighScores.css";

const HighScores = ({ onBackToGame }) => {
  const [highScores, setHighScores] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  useEffect(() => {
    setHighScores(getHighScores());
  }, []);

  const filteredScores =
    selectedDifficulty === "all"
      ? highScores
      : highScores.filter((score) => score.difficulty === selectedDifficulty);

  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, x: -100 },
  };

  const headerVariants = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const listVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 300,
      },
    },
  };

  const getMedalIcon = (index) => {
    switch (index) {
      case 0:
        return "🥇";
      case 1:
        return "🥈";
      case 2:
        return "🥉";
      default:
        return "🏅";
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "#28a745";
      case "medium":
        return "#ffc107";
      case "hard":
        return "#dc3545";
      default:
        return "#6c757d";
    }
  };

  const getDifficultyName = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "Dễ";
      case "medium":
        return "Trung bình";
      case "hard":
        return "Khó";
      default:
        return difficulty;
    }
  };

  return (
    <motion.div
      className="highscores-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.header className="highscores-header" variants={headerVariants}>
        <button className="back-btn" onClick={onBackToGame}>
          ← Quay lại
        </button>
        <h1>🏆 Bảng Xếp Hạng 🏆</h1>
        <div></div> {/* Spacer for flexbox */}
      </motion.header>

      <div className="highscores-container">
        <motion.div className="filter-section" variants={itemVariants}>
          <label htmlFor="difficulty-filter">Lọc theo độ khó:</label>
          <select
            id="difficulty-filter"
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
          >
            <option value="all">Tất cả</option>
            <option value="easy">Dễ</option>
            <option value="medium">Trung bình</option>
            <option value="hard">Khó</option>
          </select>
        </motion.div>

        <motion.div className="scores-list" variants={listVariants}>
          {filteredScores.length === 0 ? (
            <motion.div className="no-scores" variants={itemVariants}>
              <div className="no-scores-icon">🎮</div>
              <h3>Chưa có điểm số nào</h3>
              <p>Hãy chơi game để tạo kỷ lục đầu tiên!</p>
            </motion.div>
          ) : (
            filteredScores.map((score, index) => (
              <motion.div
                key={score.id}
                className={`score-item ${index < 3 ? "podium" : ""}`}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="score-rank">
                  <span className="medal">{getMedalIcon(index)}</span>
                  <span className="rank-number">#{index + 1}</span>
                </div>

                <div className="score-info">
                  <div className="player-name">{score.playerName}</div>
                  <div className="score-details">
                    <span className="score-points">
                      {score.score.toLocaleString()} điểm
                    </span>
                    <span
                      className="score-difficulty"
                      style={{ color: getDifficultyColor(score.difficulty) }}
                    >
                      {getDifficultyName(score.difficulty)}
                    </span>
                  </div>
                </div>

                <div className="score-date">{score.date}</div>
              </motion.div>
            ))
          )}
        </motion.div>

        {filteredScores.length > 0 && (
          <motion.div className="stats-summary" variants={itemVariants}>
            <h3>📊 Thống kê</h3>
            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-label">Tổng số trận</span>
                <span className="stat-value">{filteredScores.length}</span>
              </div>
              <div className="stat-card">
                <span className="stat-label">Điểm cao nhất</span>
                <span className="stat-value">
                  {Math.max(
                    ...filteredScores.map((s) => s.score)
                  ).toLocaleString()}
                </span>
              </div>
              <div className="stat-card">
                <span className="stat-label">Điểm trung bình</span>
                <span className="stat-value">
                  {Math.round(
                    filteredScores.reduce((sum, s) => sum + s.score, 0) /
                      filteredScores.length
                  ).toLocaleString()}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default HighScores;
