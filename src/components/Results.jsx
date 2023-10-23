import "./Results.css";
import Score from "./Score";

const Results = () => {
  const data = [
    {
      category: "Reaction",
      score: 80,
      icon: "./src/assets/images/icon-reaction.svg",
    },
    {
      category: "Memory",
      score: 92,
      icon: "./src/assets/images/icon-memory.svg",
    },
    {
      category: "Verbal",
      score: 61,
      icon: "./src/assets/images/icon-verbal.svg",
    },
    {
      category: "Visual",
      score: 72,
      icon: "./src/assets/images/icon-visual.svg",
    },
  ];
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
          {item.score}
          <span>/100</span>
        </p>
      </div>
    );
  });

  return (
    <div className="main-container">
      <Score scoreArr={scoreArr} />
      <div className="summary__container">
        <h2>Summary</h2>
        <div className="category__container">{testResults}</div>
        <button>continue</button>
      </div>
    </div>
  );
};

export default Results;
