import "./Results.css";
import data from '../../data.json'
import Score from "./Score";

const Results = () => {
  // arr to pass along the individual scores from the original arr
  const scoreArr = data.map((item) => item.score);
  

  //   function to dynamically extract the data from the json.data file
  const testResults = data.map((item, index) => {
    return (
      <div key={index}>
        <img src={item.icon} alt={`${item.category} Icon`} />
        <h3>{item.category}</h3>
        <p>{item.score}</p>
      </div>
    );
  });

  return (
    <div className="main-container">
      <Score scoreArr={scoreArr} />
      <div className="summary-container">
        <h1>Summary</h1>
        <div>{testResults}</div>
        <button>continue</button>
      </div>
    </div>
  );
};

export default Results;
