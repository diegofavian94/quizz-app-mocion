import {Route } from 'wouter'
import { Home } from './Components/Home'
import { Quiz } from './Components/Quiz'
import './App.css'

function App() {
  return (
    <>
      <Route path='/' component={Home} />
      <Route path='/quiz' component={Quiz} />
    </>
  )
}

export default App
