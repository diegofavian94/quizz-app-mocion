
import { Link } from "wouter"
import useQuestionsApi from "../customHooks/useQuestionsApi"

export const Quiz: React.FC<{}> = () => {
    const service = useQuestionsApi()
    

  return (
    <>
        {service.status === 'loading' && <div>Loading...</div>}
        {service.status === 'loaded' &&
        service.payload.results.map((result, i) => (
          <div key={"question_"+i}>{result.question}</div>
        ))}
        <Link href="/"><a>Play Again!</a></Link>
    </>
  )
}