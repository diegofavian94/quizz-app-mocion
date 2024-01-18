import { Link } from "wouter"

export const Home: React.FC<{}> = () => {

  return (
    <div className="h-100 flex flex-column justify-between">
        <p className="f3 b">Welcome to the trivia Challenge!</p>
        <p className="f3">You will be presented with 12 True or False questions.</p>
        <p className="f3">Can you score a 100%?</p>
        <Link href="/quiz">
            <a className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib white">
                BEGIN
            </a>
        </Link>
    </div>
  )
}
