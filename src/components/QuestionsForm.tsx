import {ChangeEvent, FC, ReactElement, useState} from 'react'
import {Box, Button, IconButton, TextField, Typography} from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import useFilter from '../hook/use-filter'
import {IQuestion} from '../store/tests-store'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../store/store'
import {setTestValues} from '../store'
import AnswersForm from './AnswersForm'

const QuestionsForm: FC<any> = (): ReactElement => {
  // const [answers, setAnswers] = useState([])
  const questionProps = useFilter('')
  const testValues = useSelector(
      (state: RootState) => state.testValues.testValues
  )

  const dispatch = useDispatch()
  const questions: IQuestion[] = testValues.questions
  const [focusedStates, setFocusedStates] = useState(
      Array.from({length: questions.length}, (_, i) => false)
  )

  const setFieldState = (i: number) =>
      setFocusedStates((prev) => {
        const newState = [...prev]
        newState[i] = !newState[i]
        return newState
      })

  const addToTest = () => {
    dispatch(
        setTestValues({
          ...testValues,
          questions: [...questions, {question: questionProps.props.value}],
        })
    )
    questionProps.reset()
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>, i: number) => {
    const value = (e.target as HTMLInputElement).value
    const newQuestions = [...questions]
    console.log({i}, newQuestions[i])
    newQuestions[i].question = value
    dispatch(setTestValues({...testValues, questions: newQuestions}))
  }
  const deleteHandler = (id: string) => {
    const filteredQuestions = questions.filter((el: IQuestion) => el._id !== id)
    dispatch(setTestValues({...testValues, questions: filteredQuestions}))
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
          <Button onClick={addToTest}>Add question</Button>
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
                      <DeleteOutlineIcon/>
                    </IconButton>
                    <AnswersForm questionIndex={i}/>
                  </Box>
                </>
            )
          })}
        </ul>
      </div>
  )
}

export default QuestionsForm
