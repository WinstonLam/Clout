import React, { useState, useEffect } from 'react';

export default function VictoryModal({ isCorrect, gameOver, solution, turn }) {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    }
    return count;
  }, [count]);

  return (
    <div className="modal">
      {gameOver && (
        <div>
          <h1>You Guessed all the words!</h1>
          <p>Redirecting to home in {count > 0 ? `${count}` : '0'}</p>
        </div>
      )}
      {isCorrect && !gameOver && (
        <div>
          <h1>You Win!</h1>
          <p className="solution">{solution}</p>
          <p>
            You found the solution in {turn + 1} {turn + 1 === 1 ? 'guess! :)' : 'guesses! :)'}
          </p>
        </div>
      )}
      {!isCorrect && !gameOver && (
        <div>
          <h1>Nevermind</h1>
          <p className="solution">{solution}</p>
          <p>Better luck next time :)</p>
        </div>
      )}
    </div>
  );
}
