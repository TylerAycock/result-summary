import "./Score.css";

const Score = ({ scoreArr }) => {
  const totalScore = 0;
  const sumWithInitial = scoreArr.reduce((acc, cur) => acc + cur, totalScore);
  const average = Math.floor(sumWithInitial / scoreArr.length);

  return (
    <div className="results-container">
      <div className="data">
        <h1 className="title">Your Results</h1>
        <div className="score">
          <h1 className="avg">{average}</h1>
          <span className="total-pts">of 100</span>
        </div>
        <div className="msg">
          <h2>Great</h2>
          <p>
            You scored higher than 65% of the people who have taken those tests.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Score;
