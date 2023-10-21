import "./Score.css";

const Score = ({ scoreArr }) => {
  const sumWithInitial = scoreArr.reduce((acc, cur) => acc + cur, 0);
  const average = Math.floor(sumWithInitial / scoreArr.length);

  return (
    <div className="results__container">
        <h2>Your Results</h2>
        <div className="score__container">
          <h3>{average}</h3>
          <span className="total-pts">of 100</span>
        </div>
        <div className="msg__container">
          <h2>Great</h2>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
    </div>
  );
};

export default Score;
