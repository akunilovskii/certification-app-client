import { FC, ReactElement, useState } from 'react'
import { TextField } from '@mui/material'
import useFilter, { IProps } from '../hook/use-filter'
import AnswersForm from './AnswersForm'

const QuestionsForm: FC<any> = ({ questions, setQuestions }): ReactElement => {
  const [questionProps, resetQuestion] = useFilter('')
  const [answers, setAnswers] = useState([])
  const addToTest = () => {
    //@ts-ignore
    setQuestions((prev: []) => [
      ...prev,
      { question: (questionProps as IProps).value, answers: answers },
    ])
    // @ts-ignore
    resetQuestion()
    // SAVE
  }

  return (
    <div>
      <div>
        <TextField
          label="Question"
          type="text"
          size="small"
          {...questionProps}
        />
        <button onClick={addToTest}>add</button>
      </div>
      <ul>
        {questions.map((question: any) => (
          <li key={question._id}>
            {question.question}
            {/* <AnswersForm answers={question.answers} setAnswers={setQuestions({...questions, })setAnswers}/> */}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QuestionsForm
