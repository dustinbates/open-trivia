

export class Question{
    constructor(data){
        this.category = data.category
        this.type = data.type
        this.difficulty = data.difficulty
        this.question = data.question
        this.correct_answer = data.correct_answer
        this.incorrect_answers = data.incorrect_answers
    }

get QuestionCard() {
    return /*html*/ `
    <div class="col-6 my-3">
        <div class="card">
            <div class="card-body text-center">
                <p class="m-0"><b>${this.question}</b></p>
            </div>
        </div>
    </div>
    `   
    }

}
