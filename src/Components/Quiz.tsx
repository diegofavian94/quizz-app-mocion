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
    <div className="h-100">
        {service.status === 'loading' && <div>Loading...</div>}
        {service.status === 'loaded' && index < 12 &&
          <div className="h-100 flex flex-column justify-between">
            <Question 
                category={service.payload.results[index].category}
                question={service.payload.results[index].question}
                number={index+1}
            />
            <div className="flex flex-column">
                <button 
                    className="f5 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib white" 
                    onClick={()=>nextQuestion("True")}
                >
                    True
                </button>
                <button 
                    className="f5 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib white"
                    onClick={()=>nextQuestion("False")}
                >
                    False
                </button>    
            </div>
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
    </div>
  )
}