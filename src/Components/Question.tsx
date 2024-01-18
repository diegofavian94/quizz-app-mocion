import useDecodeText from "../customHooks/useDecodeText"

export const Question: React.FC<{category:String, question:String, number:number}>  = ({
    category, 
    question, 
    number
}) => {
  return (
    <div className=" h-70 flex flex-column justify-between">
        <p className="f2 b">{useDecodeText(category)}</p>
        <div className="ba pv4 f3 ph2">{useDecodeText(question)}</div>
        <div className="f3 ma3">{number+" out of 12"}</div>
    </div>
    
  )
}
