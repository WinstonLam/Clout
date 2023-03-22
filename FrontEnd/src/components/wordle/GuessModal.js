import React from 'react';

export default function GuessModel({ solution, turn }) {
  return (
    <div className="modal">
      <div>
        <h1>You Guessed the Word!</h1>
        <p className="solution">{solution}</p>
        <p>You found the solution :)</p>
      </div>
    </div>
  );
}
