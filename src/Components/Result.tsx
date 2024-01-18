import { Link } from "wouter"
import useDecodeText from "../customHooks/useDecodeText"
import { IResults } from "../types/Questions"


export const Result: React.FC<{score:Number, questions:any, answers:[]}> = ({score, questions, answers}) => {
    
  return (
    <div className="h-100 flex flex-column justify-between">
        <h1>You Scored {score+"/10"}</h1>
        <div className="flex flex-column">
        {
            questions.map(
                (question:IResults, i:number)=>
                        <div key={"question_"+i}>
                            <p>Question {i+1}: {useDecodeText(question.question)}</p>
                            <p>
                              Your Answer: {answers[i]}   
                              {answers[i]===question.correct_answer ? 
                                <span className="green mh1">O</span>
                                :
                                <span className="red mh1">X</span>
                              }
                            
                            </p>
                        </div>
                    
            )
        }
        </div>
        <Link href="/"><a className="f5 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib white mt3">Play Again!</a></Link>
    </div>
  )
}
