import { ChangeEvent, FC, ReactElement, useContext, useState } from 'react'
import { Box, IconButton, TextField, Typography } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import useFilter from '../hook/use-filter'
import DataContext from '../context/data-context'
import { IQuestion, NewITest } from '../store/tests-store'

const QuestionsForm: FC<any> = (): ReactElement => {
  // const [answers, setAnswers] = useState([])
  const questionProps = useFilter('')
  const { testValues, setTestValues } = useContext(DataContext)
  const questions: IQuestion[] = testValues.questions
  const [focusedStates, setFocusedStates] = useState(
    Array.from({ length: questions.length }, (_, i) => false)
  )

  const setFieldState = (i: number) =>
    setFocusedStates((prev) => {
      const newState = [...prev]
      newState[i] = !newState[i]
      return newState
    })

  const addToTest = () => {
    //@ts-ignore
    setTestValues((prev: NewITest) => {
      if (questions) {
        return {
          ...prev,
          questions: [
            ...questions,
            {
              question: questionProps.props.value,
            },
          ],
        }
      }
    })
    questionProps.reset()
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>, i: number) => {
    const value = (e.target as HTMLInputElement).value
    const newQuestions = [...questions]
    console.log({ i }, newQuestions[i])
    newQuestions[i].question = value
    setTestValues({ ...testValues, questions: newQuestions })
  }
  const deleteHandler = (id: string) => {
    const filteredQuestions = questions.filter((el: IQuestion) => el._id !== id)
    //@ts-ignore
    setTestValues((prev: NewITest) => {
      if (questions) {
        return {
          ...prev,
          questions: filteredQuestions,
        }
      }
    })
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
        {questions.map((question: any, i: number) => {
          return (
            <>
              <Box display="flex" flexDirection="row" key={question._id || i}>
                {!focusedStates[i] ? (
                  <Typography
                    onClick={() => {
                      setFieldState(i)
                    }}
                  >
                    {question.question}
                  </Typography>
                ) : (
                  <TextField
                    autoFocus
                    value={question.question}
                    //@ts-ignore
                    onChange={(e) => onChangeHandler(e, i)}
                    onBlur={() => setFieldState(i)}
                  />
                )}
                <IconButton
                  aria-label="delete"
                  size="small"
                  onClick={() => deleteHandler(question._id)}
                >
                  <DeleteOutlineIcon />
                </IconButton>
              </Box>
            </>
          )
        })}
      </ul>
    </div>
  )
}

export default QuestionsForm
