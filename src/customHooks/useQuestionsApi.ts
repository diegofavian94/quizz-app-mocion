import { useState } from 'react'
import { useEffectOnce } from './useEffectOnce'
import questionsApi from '../api/questionsApi'
import { Service } from '../types/Services'
import { IQuestions } from '../types/questions'

const useQuestionsApi = () => {

    const [questions, setQuestions] = useState<Service<IQuestions>>({
        status:"loading"
      })

    useEffectOnce(()=>{
        const fetchData = async () => {
            const data = await questionsApi.get("",
            {
                params:{
                amount:10,
                difficulty:"hard",
                type:"boolean"
                }
            }
            )
            setQuestions({status:'loaded', payload:data.data})
        }
    fetchData().catch(error=>setQuestions({status:'error', error}))
    })

    return questions
}

export default useQuestionsApi