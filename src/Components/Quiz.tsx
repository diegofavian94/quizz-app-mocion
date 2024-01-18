
import { Link } from "wouter"
import useQuestionsApi from "../customHooks/useQuestionsApi"
import { Question } from "./Question"
import { useState } from "react"

export const Quiz: React.FC<{}> = () => {
    
    const [index, setIndex]=useState(0)
    const service = useQuestionsApi()

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
            <button onClick={()=>setIndex(index+1)}>True</button>
            <button onClick={()=>setIndex(index+1)}>False</button>    
          </div>
        }
        {index>=12 && <Link href="/"><a>Play Again!</a></Link>}
    </>
  )
}