import React from 'react';
import Quiz from 'react-quiz-component';

import {quiz} from './quiz';
import {quiz1} from './quiz1';
import {quiz2} from './quiz2';




function App() {
  let acak;
  let angka = (Math.random() * 3);  
  
  if (angka  > 0 && angka < 1) {
    acak = <Quiz  quiz={quiz} shuffle={true} />
  }
  else if (angka >= 1 && angka <=2) {
    acak = <Quiz  quiz={quiz1} shuffle={true} />
  }
  else  {
    acak = <Quiz  quiz={quiz2} shuffle={true} />
  }
  
  return (
    <div  >
       {acak}
    </div>
  );
}

export default App;
