interface IQuestions {
    
    response_code: Number
    results: IResults[]
      
}
interface IResults {

    category: String
    type: String,
    difficulty: String,
    question: String
    correct_answer: String
    incorrect_answers: [
        String
    ]
}

export type{
    IQuestions,
    IResults
}