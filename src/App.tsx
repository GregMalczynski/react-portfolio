import './index.css'
import Intro from './components/Intro';
import Main from "./components/Main";
import { useState, useEffect } from 'react';

const App:React.FC = () => {

  const [isIntro, setIsIntro] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsIntro(false)
    }, 4000)
  })

  return(
    <div id='start'>
      {isIntro ? 
        <Intro /> :
        <Main />
      }   
    </div>
  )
}

export default App;