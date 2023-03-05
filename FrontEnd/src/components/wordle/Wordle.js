import React, { useEffect, useState } from 'react';
import useWordle from '../../hooks/useWordle';

// components
import Grid from './Grid';
import Keypad from './Keypad';
import VictoryModal from './VictoryModal';
import GuessModal from './GuessModal';

export default function Wordle({ solution, setSolution }) {
  const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup, setTurn, setIsCorrect } = useWordle(solution);
  const [victoryModal, setVictoryModal] = useState(false);
  const [guessModal, setGuessModal] = useState(false);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);

    if (isCorrect) {
      // On correct guess, get new word to continue the game
      setGuessModal(true);
      setTimeout(() => setGuessModal(false), 3000);
      setIsCorrect(false);
      // here normally the next word is get from the server
      setTurn(0);
      setTimeout(() => setSolution('mode'), 3100);

      // window.removeEventListener('keyup', handleKeyup)
    }
    if (turn > 5) {
      setTimeout(() => setVictoryModal(true), 2000);
      window.removeEventListener('keyup', handleKeyup);
    }

    return () => window.removeEventListener('keyup', handleKeyup);
  }, [handleKeyup, isCorrect, turn, setSolution]);

  return (
    <div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} solution={solution} />
      <Keypad usedKeys={usedKeys} />
      {guessModal && <GuessModal solution={solution} turn={turn} />}
      {victoryModal && <VictoryModal isCorrect={isCorrect} turn={turn} solution={solution} />}
    </div>
  );
}
