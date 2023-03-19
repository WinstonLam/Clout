import React from 'react';

export default function GuessModel({ solution, turn }) {
  return (
    <div className="modal">
      <div>
        <h1>You Guessed the Word!</h1>
        <p className="solution">{solution}</p>
        <p>You found the solution in {turn + 1} {(turn + 1 === 1) ? 'guess! :)' : 'guesses! :)'}</p>
      </div>
    </div>
  );
}
