import { motion } from "framer-motion";
import "./Header.css";

const Header = ({ gameState }) => {
  const headerVariants = {
    initial: { y: -50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 300,
      },
    },
  };

  const logoVariants = {
    animate: {
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 3,
      },
    },
  };

  return (
    <motion.header
      className="app-header"
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div className="logo" variants={logoVariants} animate="animate">
        🧠
      </motion.div>
      <div className="header-content">
        <h1>MemoryMatch</h1>
        <p className="subtitle">Trò chơi lật thẻ ghép cặp</p>
      </div>
      <div className="game-status">
        <span className={`status-indicator ${gameState}`}>
          {gameState === "ready" && "🎮 Sẵn sàng"}
          {gameState === "playing" && "🔥 Đang chơi"}
          {gameState === "paused" && "⏸️ Tạm dừng"}
          {gameState === "over" && "🏆 Hoàn thành"}
        </span>
      </div>
    </motion.header>
  );
};

export default Header;
