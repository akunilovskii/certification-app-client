import React, {useContext, useState} from 'react'
import DataContext from "../../context/data-context";
import {ITest} from "../../store/tests-store";

function Test() {

  const { selectedTest, setSelectedTest } = useContext(DataContext)
  console.log('Selected test: ', selectedTest);
  const [questionIndex, setQuestionIndex] = useState(0)


    console.log('--: ', selectedTest.test[0].question);

    return (
      <div>
        <p> Test page </p>
        {selectedTest.test[questionIndex].question}
          <ol>
              {selectedTest.test[questionIndex].answers.map(el => <li key={el.id}>{el.text}</li>)}
          </ol>

          <button onClick={()=>setQuestionIndex((prev) => prev + 1)}>Next question</button>
      </div>

  )

}

export default Test
