import { Link } from "wouter"

export const Home: React.FC<{}> = () => {

    

  return (
    <div>
        <h1>Welcome to the trivia Challenge</h1>
        <h1>You will be presented with 12 True or False questions.</h1>
        <h2>Can you score a 100%?</h2>
        <Link href="/quiz"><a>BEGIN</a></Link>
    </div>
  )
}
