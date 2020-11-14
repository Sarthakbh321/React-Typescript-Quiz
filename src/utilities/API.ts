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
	let final;
	try {
		await Axios.get(url).then((res) => {
			const array = res.data.results.map((question: Question) => ({
				...question,
				answers: shuffleArray([
					...question.incorrect_answers,
					question.correct_answer,
				]),
			}));

			final = array;
		});
	} catch (error) {
		console.log(error);
	}

	return final;
};

const shuffleArray = (array: any[]) =>
	[...array].sort(() => Math.random() - 0.5);
