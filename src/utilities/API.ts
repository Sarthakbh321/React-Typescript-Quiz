import Axios from "axios";

export enum Difficulty {
	EASY = "easy",
	MEDIUM = "medium",
	HARD = "hard",
}

export const fetchQuestions = async (
	amount: number,
	difficulty: Difficulty
) => {
	const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

	try {
		await Axios.get(url).then((res) => {
			console.log(res.data);
		});
	} catch (error) {
		console.log(error);
	}
};
