import "./Results.css";
import data from "../../data.json";
import Score from "./Score";

const Results = () => {
  // arr to pass along the individual scores from the original arr
  const scoreArr = data.map((item) => item.score);

  const colors = [
    "hsl(0, 100%, 67%)",
    "hsl(39, 100%, 56%)",
    "hsl(166, 100%, 37%)",
    "hsl(234, 85%, 45%)",
  ];
  const backgroundColors = [
    "hsla(0, 100%, 67%, .2)",
    "hsla(39, 100%, 56%, .2)",
    "hsla(166, 100%, 37%, .2)",
    "hsla(234, 85%, 45%, .2)",
  ];
  //   function to dynamically extract the data from the json.data file
  const testResults = data.map((item, index) => {
    const color = colors[index];
    const backgroundColor = backgroundColors[index];

    return (
      <div
        key={index}
        className="category"
        style={{ backgroundColor: backgroundColor }}
      >
        <div className="icon-container">
          <img src={item.icon} alt={`${item.category} Icon`} />
          <h3 style={{ color }}>{item.category}</h3>
        </div>
        <p>
          {item.score} <span className="hundred">/100</span>
        </p>
      </div>
    );
  });

  return (
    <div className="main-container">
      <Score scoreArr={scoreArr} />
      <div className="summary-container">
        <div className="results">
          <h1>Summary</h1>
          <div className="category-container">{testResults}</div>
          <button className="btn">continue</button>
        </div>
      </div>
    </div>
  );
};

export default Results;
