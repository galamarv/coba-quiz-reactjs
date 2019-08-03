import React from 'react';
import './App.css';
import Quiz from 'react-quiz-component';

import { quiz } from './quiz';


function App() {
  return (
    <div  >
       <Quiz className="myImage" quiz={quiz} shuffle={true} showDefaultResult={false}/>
    </div>
  );
}

export default App;
