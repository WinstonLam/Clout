import React from 'react';

export default function Row({ guess, currentGuess, solution }) {

//   console.log("solution in row", solution)
//   console.log("currentGuess", currentGuess);
//   console.log("guess", guess);

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
    if (currentGuess.length > solution.length) currentGuess = currentGuess.slice(0, solution.length);
    const letters = currentGuess.split('');
    return (
      <div className="row current">
        {letters.map((letter, i) => (
          <div key={i} className="filled">
            {letter}
          </div>
        ))}
        {[...Array(solution.length - letters.length)].map((_, i) => (
          <div key={i} />
        ))}
      </div>
    );
  }
  // if solution consist of more than 5 letters, then expand the grid
  return (
    <div className="row">
      {[...Array(Math.max(solution.length))].map((_, i) => (
        <div key={i} />
      ))}
    </div>
  );
}
