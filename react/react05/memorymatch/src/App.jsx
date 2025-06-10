import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import GamePage from "./pages/GamePage";
import HighScores from "./pages/HighScores";
import "./App.css";

function App() {
  const [currentView, setCurrentView] = useState("game"); // 'game' or 'highscores'

  const handleViewHighScores = () => {
    setCurrentView("highscores");
  };

  const handleBackToGame = () => {
    setCurrentView("game");
  };

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {currentView === "game" ? (
          <GamePage key="game" onViewHighScores={handleViewHighScores} />
        ) : (
          <HighScores key="highscores" onBackToGame={handleBackToGame} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
