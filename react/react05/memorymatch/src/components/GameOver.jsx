import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { formatTime, saveHighScore, isNewHighScore } from "../utils/helpers";
import "./GameOver.css";

const GameOver = ({
  score,
  moves,
  time,
  difficulty,
  onRestart,
  onViewHighScores,
}) => {
  const [playerName, setPlayerName] = useState("");
  const [showNameInput, setShowNameInput] = useState(isNewHighScore(score));
  const [scoreSaved, setScoreSaved] = useState(false);

  const handleSaveScore = () => {
    if (playerName.trim()) {
      saveHighScore(score, playerName.trim(), difficulty);
      setScoreSaved(true);
      setShowNameInput(false);
    }
  };

  const handleSkipSave = () => {
    setShowNameInput(false);
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
  };

  const confettiVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const confettiPiece = {
    hidden: { y: -100, opacity: 0, rotate: 0 },
    visible: {
      y: [0, 100, 200],
      opacity: [1, 1, 0],
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="game-over-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Confetti Animation */}
        <motion.div
          className="confetti"
          variants={confettiVariants}
          initial="hidden"
          animate="visible"
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={`confetti-piece confetti-${i % 4}`}
              variants={confettiPiece}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </motion.div>

        <motion.div
          className="game-over-modal"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="modal-header">
            <h2>🎉 Chúc mừng! 🎉</h2>
            <p>Bạn đã hoàn thành trò chơi!</p>
          </div>

          <div className="game-stats">
            <div className="stat-item">
              <span className="stat-icon">🏆</span>
              <span className="stat-label">Điểm số</span>
              <span className="stat-value">{score.toLocaleString()}</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon">⏱️</span>
              <span className="stat-label">Thời gian</span>
              <span className="stat-value">{formatTime(time)}</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon">🎯</span>
              <span className="stat-label">Số lượt</span>
              <span className="stat-value">{moves}</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon">⚡</span>
              <span className="stat-label">Độ khó</span>
              <span className="stat-value">{difficulty}</span>
            </div>
          </div>

          {showNameInput && (
            <motion.div
              className="name-input-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3>🌟 Điểm cao mới! 🌟</h3>
              <p>Nhập tên để lưu điểm số:</p>
              <div className="name-input-group">
                <input
                  type="text"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  placeholder="Tên của bạn"
                  maxLength={20}
                  onKeyPress={(e) => e.key === "Enter" && handleSaveScore()}
                />
                <button onClick={handleSaveScore} disabled={!playerName.trim()}>
                  Lưu
                </button>
              </div>
              <button className="skip-btn" onClick={handleSkipSave}>
                Bỏ qua
              </button>
            </motion.div>
          )}

          {scoreSaved && (
            <motion.div
              className="save-confirmation"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              ✅ Đã lưu điểm cao!
            </motion.div>
          )}

          <div className="modal-actions">
            <motion.button
              className="btn primary"
              onClick={onRestart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🎮 Chơi lại
            </motion.button>
            <motion.button
              className="btn secondary"
              onClick={onViewHighScores}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🏅 Bảng xếp hạng
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GameOver;
