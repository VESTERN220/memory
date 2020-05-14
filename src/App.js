import React, { useEffect, useState } from 'react';
import css from './App.module.css';
import { CardArray } from './components/Cards/CardArray';
import ColorRandomArray from './components/Colors/ColorRandomArray';

const App = () => {
  const [cards, setCards] = useState([]);
  const [restart, setRestart] = useState(false);
  const [flipped, setFlipped] = useState([]);
  const [decision, setDecision] = useState([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setCards(ColorRandomArray);
  }, [restart]);

  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };

  const restartGame = () => {
    setRestart(!restart);
    setDecision([]);
    resetCards();
  };
  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id);
    const flippedCard = cards.find((card) => flipped[0] === card.id);
    return flippedCard.type === clickedCard.type;
  };
  const handleClick = (id) => {
    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
    } else {
      setFlipped([flipped[0], id]);
      setTimeout(() => {
        if (isMatch(id)) {
          setDecision([...decision, flipped[0], id]);
          resetCards();
        } else {
          setTimeout(resetCards, 500);
        }
      }, 150);
    }
  };
  return (
    <div className={css.gameField}>
      <CardArray
        cards={cards}
        handleClick={handleClick}
        flipped={flipped}
        decision={decision}
        disabled={disabled}
      />
      <button type="button" className={css.buttonRestart} onClick={() => restartGame()}>RESTART</button>
    </div>
  );
};

export default App;
