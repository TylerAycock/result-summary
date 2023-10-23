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

  // const colors = [
  //   "hsl(0, 100%, 67%)",
  //   "hsl(39, 100%, 56%)",
  //   "hsl(166, 100%, 37%)",
  //   "hsl(234, 85%, 45%)",
  // ];
  // const backgroundColors = [
  //   "hsla(0, 100%, 67%, .2)",
  //   "hsla(39, 100%, 56%, .2)",
  //   "hsla(166, 100%, 37%, .2)",
  //   "hsla(234, 85%, 45%, .2)",
  // ];

  // const testResults = data.map((item, index) => {
  //   const color = colors[index];
  //   const backgroundColor = backgroundColors[index];

  //   return (
  //     <div
  //       key={index}
  //       className="category"
  //       style={{ backgroundColor: backgroundColor }}
  //     >
  //       <div className="icon-container">
  //         <img src={item.icon} alt={`${item.category} Icon`} />
  //         <h3 style={{ color }}>{item.category}</h3>
  //       </div>
  //       <p>
  //         {item.score}
  //         <span>/100</span>
  //       </p>
  //     </div>
  //   );
  // });

  return (
    <div className="main-container">
      <Score scoreArr={scoreArr} />
      <div className="summary__container">
        <h2>Summary</h2>
        <div className="category__container">
          <div className="category reaction">
            <div className="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#F55" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"/></svg>
            <h3>Reaction</h3>
            </div>
            <p>80 <span>/100</span></p>
          </div>
          <div className="category memory">
          <div className="icon-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#FFB21E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858"/><path stroke="#FFB21E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"/><path stroke="#FFB21E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"/></svg>            
          <h3>Memory</h3>
            </div>
            <p>92 <span>/100</span></p>
          </div>
          <div className="category verbal">
             <div className="icon-container">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#00BB8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"/></svg>          <h3>Verbal</h3>
            </div>
            <p>61 <span>/100</span></p>
          </div>
          <div className="category visual">
          <div className="icon-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#1125D6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"/><path stroke="#1125D6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"/></svg>          <h3>Visual</h3>
            </div>
            <p>72 <span>/100</span></p>
          </div>
        </div>
        <button>continue</button>
      </div>
    </div>
  );
};

export default Results;
