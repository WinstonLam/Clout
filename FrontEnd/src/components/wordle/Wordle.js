import React, { useEffect, useState } from 'react';
import useWordle from '../../hooks/useWordle';

// components
import Grid from './Grid';
import Keypad from './Keypad';
import VictoryModal from './VictoryModal';
import GuessModal from './GuessModal';

import { GameUpdateRequest, NextWordRequest } from '../../clientprotos/gameservice/gameservice_pb';

export default function Wordle({ solution, description, setSolution, setDescription, client, gameId }) {
  const [guess, setGuess] = useState('');
  const [reset, setReset] = useState('');
  const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup, setTurn, setIsCorrect, resetGame } = useWordle(
    solution,
    setGuess
  );
  const [gameover, setGameover] = useState(false);
  const [victoryModal, setVictoryModal] = useState(false);

  const [guessModal, setGuessModal] = useState(false);
  const gameUpdate = new GameUpdateRequest();
  const nextWord = new NextWordRequest();
  gameUpdate.setGameId(gameId);
  nextWord.setGameId(gameId);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);

    if (isCorrect) {
      gameUpdate.setGuess(guess);

      // ask server to update game and check if guess is correct
      client.updateGame(gameUpdate, {}, (err, response) => {
        if (err) console.log('failed', err);
        else {
          console.log('succes updateGame request');
          console.log(response.array[0]);

          // On correct guess, get new word to continue the game
          if (response.array[0] === true) {
            setGuessModal(true);
            // setTimeout(() => setGuessModal(false), 3000);

            setIsCorrect(false);
            // setTurn(0);
            resetGame();
            client.nextWord(nextWord, {}, (err, response) => {
              if (err) console.log('failed', err);
              else {
                console.log('succes nextWord request');
                console.log(response.array[0]);
                console.log(response.array);
                if (response.array[0] === null) {
                  console.log('game is over');
                  setGameover(true);
                  setTimeout(() => setVictoryModal(true), 2000);
                  window.removeEventListener('keyup', handleKeyup);
                  // navigate home after 5 seconds
                  setTimeout(() => {
                    window.location.href = '/';
                  }, 5000);
                } else {
                  setTimeout(() => setDescription(response.array[3]), 3000);
                  setTimeout(() => setSolution(response.array[2].replace(/\s/g, '')), 3000);
                  setTimeout(() => setGuessModal(false), 3000);
                }
              }
            });
          } else {
            console.log('guess is not correct according to server');
            setIsCorrect(false);
            // setTurn(0);
            resetGame();
          }
        }
      });
    }
    if (turn > 5) {
      setTimeout(() => setVictoryModal(true), 2000);
      window.removeEventListener('keyup', handleKeyup);
    }

    return () => window.removeEventListener('keyup', handleKeyup);
  }, [handleKeyup, isCorrect, turn, setSolution]);

  return (
    <div>
      <p>{description}</p>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} solution={solution} />
      <Keypad usedKeys={usedKeys} />
      {guessModal && <GuessModal solution={solution} turn={turn} />}
      {victoryModal && <VictoryModal isCorrect={isCorrect} gameOver={gameover} turn={turn} solution={solution} />}
    </div>
  );
}
