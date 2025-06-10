import { motion } from "framer-motion";
import Card from "./Card";
import { difficultyLevels } from "../data/cards";
import "./GameBoard.css";

const GameBoard = ({ cards, onCardClick, selectedCards, difficulty }) => {
  const { gridSize } = difficultyLevels[difficulty];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      className={`game-board difficulty-${difficulty}`}
      style={{
        gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`,
        gridTemplateRows: `repeat(${gridSize.rows}, 1fr)`,
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {cards.map((card, index) => (
        <motion.div
          key={card.uniqueId}
          variants={cardVariants}
          className="card-slot"
        >
          <Card
            card={card}
            onCardClick={() => onCardClick(index)}
            isDisabled={selectedCards.length >= 2}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GameBoard;
