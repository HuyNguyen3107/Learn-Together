import { motion } from "framer-motion";
import { formatTime } from "../utils/helpers";
import "./Timer.css";

const Timer = ({ time, gameState }) => {
  const isPlaying = gameState === "playing";

  return (
    <motion.div
      className={`timer ${isPlaying ? "playing" : ""}`}
      animate={isPlaying ? { scale: [1, 1.05, 1] } : {}}
      transition={{ duration: 1, repeat: Infinity }}
    >
      <div className="timer-icon">⏱️</div>
      <div className="timer-value">{formatTime(time)}</div>
    </motion.div>
  );
};

export default Timer;
