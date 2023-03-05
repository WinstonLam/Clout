import React from 'react';

export default function Row({ guess, currentGuess, solution }) {
  if (guess) {
    return (
      <div className="row past">
        {guess.map((l, i) => (
          <div key={i} className={l.color}>
            {l.key}
          </div>
        ))}
      </div>
    );
  }

  if (currentGuess) {
    const letters = currentGuess.split('');
    console.log(letters);
    return (
      <div className="row current">
        {letters.map((letter, i) => (
          <div key={i} className="filled">
            {letter}
          </div>
        ))}
        {[...Array(5 - letters.length)].map((_, i) => (
          <div key={i} />
        ))}
      </div>
    );
  }

  // if solution consist of more than 5 letters, then expand the grid
  return (
    <div className="row">
      {[...Array(Math.max(solution.length, 5))].map((_, i) => (
        <div key={i} />
      ))}
    </div>
  );
}
