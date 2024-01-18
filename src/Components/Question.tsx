

export const Question: React.FC<{category:String, question:String, number:Number}>  = ({
    category, 
    question, 
    number
}) => {
  return (
    <div>
        <h1>{category}</h1>
        <div>{question}</div>
        <div>{number+" out of 12"}</div>
    </div>
    
  )
}
