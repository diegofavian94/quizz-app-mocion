import { Link } from "wouter"
import { IResults } from "../types/Questions"


export const Result: React.FC<{score:Number, questions:any, answers:[]}> = ({score, questions, answers}) => {
    
  return (
    <div>
        <h1>You Scored {score+"/10"}</h1>
        <ul>
        {
            questions.map(
                (question:IResults, i:number)=>
                        <li key={"question_"+i}>
                            Question:
                            <span>{question.question}</span>
                            Answer
                            <span>{answers[i]}</span>
                            {answers[i]===question.correct_answer ? "Good":"Wrong"}
                        </li>
                    
            )
        }
        </ul>
        <Link href="/"><a>Play Again!</a></Link>
    </div>
  )
}
