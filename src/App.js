import React from 'react';
import './App.css';
import Quiz from 'react-quiz-component';

import {quiz} from './quiz';
import {quiz1} from './quiz1';
import {quiz2} from './quiz2';




function App() {
  let acak;
  let angka = Math.floor(Math.random() * 3);  
  if (angka  === 0) {
    acak = <Quiz  quiz={quiz} shuffle={true} />
  }
  else if (angka === 1) {
    acak = <Quiz  quiz={quiz1} shuffle={true} />
  }
  else if (angka > 1) {
    acak = <Quiz  quiz={quiz2} shuffle={true} />
  }
  return (
    <div  >
       {acak}
    </div>
  );
}

export default App;
