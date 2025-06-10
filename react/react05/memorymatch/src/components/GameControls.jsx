import { motion } from "framer-motion";
import { difficultyLevels } from "../data/cards";
import "./GameControls.css";

const GameControls = ({
  difficulty,
  onDifficultyChange,
  onRestart,
  onTogglePause,
  gameState,
}) => {
  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <div className="game-controls">
      <div className="difficulty-selector">
        <label htmlFor="difficulty">Độ khó:</label>
        <select
          id="difficulty"
          value={difficulty}
          onChange={(e) => onDifficultyChange(e.target.value)}
          disabled={gameState === "playing"}
        >
          {Object.entries(difficultyLevels).map(([key, level]) => (
            <option key={key} value={key}>
              {level.name} ({level.gridSize.rows}x{level.gridSize.cols})
            </option>
          ))}
        </select>
      </div>

      <div className="control-buttons">
        <motion.button
          className="control-btn restart-btn"
          onClick={onRestart}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <span className="btn-icon">🔄</span>
          <span className="btn-text">Chơi lại</span>
        </motion.button>

        {gameState === "playing" || gameState === "paused" ? (
          <motion.button
            className={`control-btn pause-btn ${
              gameState === "paused" ? "paused" : ""
            }`}
            onClick={onTogglePause}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span className="btn-icon">
              {gameState === "paused" ? "▶️" : "⏸️"}
            </span>
            <span className="btn-text">
              {gameState === "paused" ? "Tiếp tục" : "Tạm dừng"}
            </span>
          </motion.button>
        ) : null}
      </div>
    </div>
  );
};

export default GameControls;
