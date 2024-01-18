import { useState, useRef } from "react"
import useQuestionsApi from "../customHooks/useQuestionsApi"
import { Question } from "./Question"
import { Result } from "./Result"


export const Quiz: React.FC<{}> = () => {
    
    const [index, setIndex]=useState(0)
    const service = useQuestionsApi()
    const score = useRef(0)
    const answers = useRef<any>([])

const nextQuestion  = (answer:"True"|"False") =>{
    
    if(
        service.status==="loaded" 
        && 
        answer===service.payload.results[index].correct_answer
    ){
      score.current=score.current+1
    }
    answers.current[index]=answer
    setIndex(index+1)
}

  return (
    <>
        {service.status === 'loading' && <div>Loading...</div>}
        {service.status === 'loaded' && index < 12 &&
          <div key={"question_"+index}>
            <Question 
                category={service.payload.results[index].category}
                question={service.payload.results[index].question}
                number={index+1}
            />
            <button onClick={()=>nextQuestion("True")}>True</button>
            <button onClick={()=>nextQuestion("False")}>False</button>    
          </div>
        }
        {service.status === 'loaded' 
        &&
        index>=12 
        && 
            <Result 
                score={score.current} 
                questions={service.payload.results} 
                answers={answers.current}
            />
        }
    </>
  )
}