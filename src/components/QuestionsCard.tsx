import React from "react";

type Props = {
	question: string;
	answer: string[];
	callback: any;
	userAnswer: any;
	questionNr: number;
	totalQuestions: number;
};

const QuestionsCard: React.FC<Props> = (props) => {
	const {
		question,
		answer,
		callback,
		userAnswer,
		questionNr,
		totalQuestions,
	} = props;

	return (
		<div>
			<p>
				Question {questionNr} / {totalQuestions}
			</p>
			<p>{question}</p>
			<div>{answer.map((option = <button disabled>option</button>))}</div>
		</div>
	);
};

export default QuestionsCard;
