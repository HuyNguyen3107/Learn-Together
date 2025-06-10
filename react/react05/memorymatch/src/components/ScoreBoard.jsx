import { motion } from "framer-motion";
import "./ScoreBoard.css";

const ScoreBoard = ({ score, moves, matchedPairs, totalPairs, streak }) => {
  return (
    <div className="scoreboard">
      <motion.div
        className="score-item"
        animate={score > 0 ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 0.3 }}
      >
        <div className="score-icon">🏆</div>
        <div className="score-label">Điểm</div>
        <div className="score-value">{score.toLocaleString()}</div>
      </motion.div>

      <div className="score-item">
        <div className="score-icon">🎯</div>
        <div className="score-label">Lượt</div>
        <div className="score-value">{moves}</div>
      </div>

      <div className="score-item">
        <div className="score-icon">✨</div>
        <div className="score-label">Cặp</div>
        <div className="score-value">
          {matchedPairs}/{totalPairs}
        </div>
      </div>

      {streak > 1 && (
        <motion.div
          className="score-item streak"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        >
          <div className="score-icon">🔥</div>
          <div className="score-label">Streak</div>
          <div className="score-value">{streak}</div>
        </motion.div>
      )}
    </div>
  );
};

export default ScoreBoard;
