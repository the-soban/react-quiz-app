import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="app">
            <h1 className="header">Quiz APP</h1>
            <h2 className="score">Your Score: 3</h2>
            <div className="question-card">
                <h2>Question 1 out of 5</h2>
                <h3>What id the capital of the U.S?</h3>
                <ul>
                    <li>Boston</li>
                    <li>New York City</li>
                    <li>Denver</li>
                    <li>Washington DC</li>
                </ul>
            </div>
        </div>
    );
}

export default App;
