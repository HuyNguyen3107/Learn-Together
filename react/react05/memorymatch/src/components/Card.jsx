import { motion } from "framer-motion";
import "./Card.css";

const Card = ({ card, onCardClick, isDisabled }) => {
  const handleClick = () => {
    if (!isDisabled && !card.isFlipped && !card.isMatched) {
      onCardClick();
    }
  };

  const cardVariants = {
    hidden: { rotateY: 0 },
    visible: { rotateY: 180 },
  };

  const bounceVariants = {
    matched: {
      scale: [1, 1.1, 0.9, 1.05, 1],
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      className={`card ${card.isFlipped ? "flipped" : ""} ${
        card.isMatched ? "matched" : ""
      }`}
      onClick={handleClick}
      whileHover={{ scale: card.isFlipped || card.isMatched ? 1 : 1.05 }}
      whileTap={{ scale: card.isFlipped || card.isMatched ? 1 : 0.95 }}
      animate={card.isMatched ? "matched" : ""}
      variants={bounceVariants}
    >
      <motion.div
        className="card-inner"
        animate={card.isFlipped || card.isMatched ? "visible" : "hidden"}
        variants={cardVariants}
        transition={{ duration: 0.3 }}
      >
        <div className="card-front">
          <div className="card-pattern">?</div>
        </div>
        <div className="card-back">
          <div className="card-emoji">{card.emoji}</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
