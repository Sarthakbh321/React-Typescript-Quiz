import Axios from "axios";

export enum Difficulty {
	EASY = "easy",
	MEDIUM = "medium",
	HARD = "hard",
}

export type Question = {
	category: string;
	correct_answer: string;
	difficulty: string;
	incorrect_answers: string[];
	question: string;
	type: string;
};

export type QuestionState = Question & { answers: string[] };

export const fetchQuestions = async (
	amount: number,
	difficulty: Difficulty
) => {
	const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

	try {
		await Axios.get(url).then((res) => {
			console.log(res.data);
			return res.data.results.map((question: Question) => ({
				...question,
				answers: shuffleArray([
					...question.incorrect_answers,
					question.correct_answer,
				]),
			}));
		});
	} catch (error) {
		console.log(error);
	}
};

const shuffleArray = (array: any[]) =>
	[...array].sort(() => Math.random() - 0.5);
