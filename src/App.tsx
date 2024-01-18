import {Route } from 'wouter'
import { Home } from './Components/Home'
import { Quiz } from './Components/Quiz'
import './App.css'

function App() {
  return (
    <div className="quiz-app">
      <Route path='/' component={Home} />
      <Route path='/quiz' component={Quiz} />
    </div>
  )
}

export default App
