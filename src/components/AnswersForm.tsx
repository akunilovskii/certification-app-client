import { ChangeEvent, FC, ReactElement, useEffect, useState } from 'react'
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  TextField,
} from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import useFilter from '../hook/use-filter'
import RuleIcon from '@mui/icons-material/Rule'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { setTestValues } from '../store'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { IAnswer } from '../store/tests-store'

interface IProps {
  questionIndex: number
}
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
}

const AnswersForm: FC<any> = ({ questionIndex }: IProps): ReactElement => {
  const [answers, setAnswers] = useState<IAnswer[]>([])
  const [focusedStates, setFocusedStates] = useState(
    Array.from({ length: answers.length }, (_, i) => false)
  )
  const [open, setOpen] = useState(false)
  const [checked, setChecked] = useState([0])
  const dispatch = useDispatch()

  const testValues = useSelector(
    (state: RootState) => state.testValues.testValues
  )

  useEffect(() => {
    console.log('render')
    setAnswers(testValues.questions[questionIndex].answers!)
    //TODO needs optimization
  }, [questionIndex, testValues.questions])

  const answerProps = useFilter('')

  useEffect(() => {
    setChecked([])
  }, [])

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  const addAnswer = () => {
    setAnswers((prev) => [
      ...prev,
      { text: answerProps.props.value, correct: false },
    ])
    answerProps.reset()
  }

  //DELETE IT
  const deleteHandler2 = () => {
    const newAnswers = answers.filter((_, i: number) => !checked.includes(i))
    setChecked([])
    setAnswers(newAnswers)
  }

  const deleteHandler = () => {
    const newAnswers = answers.filter((_, i: number) => !checked.includes(i))
    setChecked([])
    setAnswers(newAnswers)
  }

  const setFieldState = (i: number) =>
    setFocusedStates((prev) => {
      const newState = [...prev]
      newState[i] = !newState[i]
      return newState
    })

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>, i: number) => {
    const value = (e.target as HTMLInputElement).value
    setAnswers(
      answers.map((answer, index) =>
        index !== i ? answer : { ...answer, text: value }
      )
    )
  }

  const onClickHandler = (i: number) => {
    setAnswers(
      answers.map((answer, index) =>
        index !== i ? answer : { ...answer, correct: !answer.correct }
      )
    )
  }

  const answersUpdateHandler = () => {
    const newQuestions = testValues.questions.map((question, index) => {
      if (index !== questionIndex) return question
      return { ...question, answers }
    })

    dispatch(setTestValues({ ...testValues, questions: newQuestions }))
    setOpen(false)
  }

  return (
    <Box>
      <Button
        data-testid={`openButton${questionIndex}`}
        onClick={() => setOpen(true)}
      >
        <RuleIcon />
      </Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <TextField
              label="Answer"
              type="text"
              size="small"
              {...answerProps.props}
            />
            <Button onClick={addAnswer}>Add answer</Button>
          </Box>

          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          >
            {answers.map((el, value) => {
              const labelId = `checkbox-list-label-${value}`

              return (
                <ListItem
                  key={value}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="comments"
                      onClick={() => onClickHandler(value)}
                    >
                      {el.correct ? (
                        <CheckCircleOutlineIcon />
                      ) : (
                        <HighlightOffIcon />
                      )}
                    </IconButton>
                  }
                  disablePadding
                >
                  <ListItemButton role={undefined} dense>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(value) !== -1}
                        onClick={handleToggle(value)}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </ListItemIcon>

                    {!focusedStates[value] ? (
                      <ListItemText
                        id={labelId}
                        primary={el.text}
                        onClick={() => {
                          setFieldState(value)
                        }}
                      />
                    ) : (
                      <TextField
                        autoFocus
                        value={answers[value].text}
                        //@ts-ignore
                        onChange={(e) => onChangeHandler(e, value)}
                        onBlur={() => setFieldState(value)}
                      />
                    )}
                  </ListItemButton>
                </ListItem>
              )
            })}
          </List>

          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            sx={{ m: '1rem 0.5rem 0.5rem' }}
          >
            <IconButton
              color="primary"
              size="small"
              onClick={deleteHandler}
              disabled={checked.length === 0}
            >
              <DeleteOutlineIcon />
            </IconButton>
            <Button
              color="primary"
              variant="outlined"
              size="small"
              onClick={answersUpdateHandler}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}

export default AnswersForm
