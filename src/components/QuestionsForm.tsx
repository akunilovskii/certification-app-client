import { FC, ReactElement, useContext, useState } from 'react'
import { TextField } from '@mui/material'
import useFilter, { IProps } from '../hook/use-filter'
import DataContext from '../context/data-context'
import { NewITest } from '../store/tests-store'

const QuestionsForm: FC<any> = (): ReactElement => {
  const questionProps = useFilter('')
  const { testValues, setTestValues } = useContext(DataContext)
  const [answers, setAnswers] = useState([])
  console.log(testValues.questions)

  const addToTest = () => {
    //@ts-ignore
    setTestValues((prev: NewITest) => {
      if (testValues.questions) {
        return {
          ...prev,
          questions: [
            ...testValues.questions,
            {
              question: questionProps.props.value,
            },
          ],
        }
      }
    })

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
        <button onClick={addToTest}>Add question</button>
      </div>
      <ul>
        {testValues.questions.map((question: any, i: number) => {
          return (
            <li key={question._id || i}>
              {question.question}
              {/* <AnswersForm answers={question.answers} setAnswers={setQuestions({...questions, })setAnswers}/> */}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default QuestionsForm
