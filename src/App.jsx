import { useState } from "react";
import './App.css';

function App() {
  const [state, setState] = useState({
    score: 76,
    wicket: 2,
    ball: 50,
  });

  const handleChange = (key,value)=>{
    if(state.score > 100){
      return;
    }
    if(state.wicket >=  12){
      return;
    }
    setState(prevState =>{
      return{...prevState, [key]: prevState[key] + value}
    })
  }
  const balls = state.ball > 0 ? `${Math.floor(state.ball/6)+"."+(state.ball%6)}`: state.ball;
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              state.score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              state.wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              balls
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=>{
          handleChange("score", 1)
        }} >Add 1</button>
        <button className="addScore4" onClick={()=>{
          handleChange("score", 4)
        }} >Add 4</button>
        <button className="addScore6" onClick={()=>{
          handleChange("score", 6)
        }} >Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>{
          handleChange("wicket", 1)
        }}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>{
          handleChange("ball", 1)
        }}>Add 1</button>
      </div>

      {state.score > 100 ? <h1>India Won</h1> : null  || state.wicket >= 12 ? <h1>India Lost</h1>: null}
    </div>
  );
}

export default App;
