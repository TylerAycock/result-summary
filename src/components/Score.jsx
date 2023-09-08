const Score = ({ scoreArr }) => {
  const totalScore = 0;
  const sumWithInitial = scoreArr.reduce((acc, cur) => acc + cur, totalScore);
  const average = Math.floor(sumWithInitial / scoreArr.length);

  return (
    <div className="results-container">
      <h1>Your Results</h1>
      <div>
        <h1 className="avg">{average}</h1>
        <span className="total-pts">of 100</span>
      </div>
      <div className="msg">
        <h2>Great</h2>
        <p>
          You scored higher than 65% of the people who ahve taken those tests.
        </p>
      </div>
    </div>
  );
};

export default Score;
