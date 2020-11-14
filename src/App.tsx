import React, { useEffect, useState } from "react";
import "./App.css";
import QuestionsCard from "./components/QuestionsCard";
import { fetchQuestions, Difficulty, QuestionState } from "./utilities/API";

const TOTAL_QUESTIONS = 10;

const App: React.FC = () => {
	const [loading, setLoading] = useState(true);

	const [number, setNumber] = useState(0);
	const [questions, setQuestions] = useState<QuestionState[] | undefined>([]);
	const [answers, setAnswers] = useState([]);
	const [score, setScore] = useState([]);
	const [gameOver, setGameOver] = useState(false);

	const startTrivia = async () => {
		console.log("started");
	};

	// const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

	const getQuestion = async () => {
		const ques = await fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
		setQuestions(ques);
		setLoading(false);
	};

	useEffect(() => {
		getQuestion();
	}, []);

	if (loading) {
		return <h1>Loading....</h1>;
	}

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
			{/* <QuestionsCard
				questionNr={number + 1}
				totalQuestions={questions.length}
				question={questions[number].question}
				answer={questions[number].answers}
				userAnswer={answers ? answers[number] : undefined}
				callback={checkAnswer}
			/> */}
		</div>
	);
};

export default App;
