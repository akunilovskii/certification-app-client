import {FC, ReactElement, useContext, useState} from 'react'
import { TextField } from '@mui/material'
import useFilter, { IProps } from '../hook/use-filter'
import AnswersForm from './AnswersForm'
import DataContext from "../context/data-context";
import {NewITest} from "../store/tests-store";

const QuestionsForm: FC<any> = (): ReactElement => {
  const questionProps = useFilter('')
    const { testValues, setTestValues } = useContext(DataContext)
  const [answers, setAnswers] = useState([])

    console.log("value: ", questionProps.props.value)
    const addToTest = () => {
        setTestValues((prev: NewITest) => {


            console.log("questions: ", testValues.questions)
            return {
        ...prev,
                questions: [...testValues.questions, questionProps.props.value],
            // { question: questionProps.props.value, answers: answers },
        }})
        console.log('testValues: ', testValues);

    questionProps.reset()
    // SAVE
  }

  return (
    <div>
      <div>
        <TextField
          label="Question"
          type="text"
          size="small"
          {...questionProps.props}
        />
        <button
            onClick={addToTest}
        >add</button>
      </div>
      <ul>
        {testValues.questions.map((question: any) => (
          <li key={question._id}>
            {question}
            {/* <AnswersForm answers={question.answers} setAnswers={setQuestions({...questions, })setAnswers}/> */}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QuestionsForm
