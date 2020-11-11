import React, { useState } from "react";
import "./App.css";
import QuestionsCard from "./components/QuestionsCard";

const App: React.FC = () => {
	const [loading, setLoading] = useState(false);
	const [number, setNumber] = useState(0);
	const [questions, setQuestions] = useState([]);
	const [answers, setAnswers] = useState([]);
	const [score, setScore] = useState([]);
	const [gameOver, setGameOver] = useState(false);

	const startTrivia = async () => {};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

	return (
		<div className="App">
			<h1>REACT QUIZ</h1>
			<div>
				<button className="start-btn" onClick={startTrivia}>
					Start Quiz
				</button>
			</div>
			<div>
				<p>Start the quiz</p>
			</div>
			<QuestionsCard
				questionNr={number + 1}
				totalQuestions={questions.length}
				question={questions[number].question}
				answer={questions[number].answers}
				userAnswer={answers ? answers[number] : undefined}
				callback={checkAnswer}
			/>
		</div>
	);
};

export default App;
