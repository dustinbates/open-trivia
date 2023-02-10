import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";
import { trivia_api } from "./AxiosService.js";


class QuestionsService{

    async GetQuestions(){
        const res = await trivia_api.get('api.php?amount=10&category=15&difficulty=medium')
        console.log(res.data);
        const questions = res.data.results.filter(q => q.question).map(q => new Question(q))
        appState.questions = questions
    }
}

export const questionsService = new QuestionsService()