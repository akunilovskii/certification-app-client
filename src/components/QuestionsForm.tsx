import { ChangeEvent, FC, ReactElement, useState } from 'react'
import { Box, Button, IconButton, TextField, Typography } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import useFilter from '../hook/use-filter'
import { IQuestion } from '../store/interfaces'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { setTestValues } from '../store'
import AnswersForm from './AnswersForm'

const QuestionsForm: FC<any> = (): ReactElement => {
  const questionProps = useFilter('')
  const testValues = useSelector(
    (state: RootState) => state.testValues.testValues
  )

  const dispatch = useDispatch()
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
    if (questionProps.props.value.trim() === '') return
    dispatch(
      setTestValues({
        ...testValues,
        questions: [
          ...questions,
          {
            question: questionProps.props.value,
            answers: [],
            selected: [],
            shouldSelect: 1,
            error: false,
          },
        ],
      })
    )
    questionProps.reset()
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>, i: number) => {
    const value = (e.target as HTMLInputElement).value
    const newQuestions = structuredClone([...questions])
    newQuestions[i].question = value
    dispatch(setTestValues({ ...testValues, questions: newQuestions }))
  }

  const deleteHandler = (id: string) => {
    const filteredQuestions = questions.filter((el: IQuestion) => el._id !== id)
    dispatch(setTestValues({ ...testValues, questions: filteredQuestions }))
  }

  return (
    <Box>
      <Box display="flex" alignItems="flex-end" sx={{ maxWidth: '500px', width: '40vw', justifyContent: 'space-between', p: '0.5rem' }}>
        <TextField
          label="Question"
          variant="standard"
          type="text"
          size="small"
          sx={{}}
          {...questionProps.props}
        />
        <Button sx={{p: '0', pt: '0.25rem' }} onClick={addToTest}>Add question</Button>
      </Box>
      {questions.map((question: any, i: number) => {
        return (
          <Box
            display="flex"
            flexDirection="row"
            sx={{ maxWidth: '500px', width: '40vw', justifyContent: 'space-between' }}
            key={question._id || i}
          >
            {!focusedStates[i] ? (
              <Typography
                sx={{ p: '0.5rem' }}
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
            <Box display="flex">
              <IconButton
                aria-label="delete"
                size="small"
                onClick={() => deleteHandler(question._id)}
              >
                <DeleteOutlineIcon />
              </IconButton>
              <AnswersForm questionIndex={i} />
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}

export default QuestionsForm
