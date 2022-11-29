import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  List,
  ListItem,
  ListItemButton,
  Pagination,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DataContext from '../../context/data-context'
import { ITest } from '../../store/tests-store'

function Test() {
  const navigate = useNavigate()
  const { selectedTest } = useContext(DataContext)
  const [questionIndex, setQuestionIndex] = useState(1)
  useEffect(() => {
    console.log('render')
  }, [questionIndex])
  const [answers, setAnswers] = useState<ITest[]>([...selectedTest.test])
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const elValue = +(event.target as HTMLInputElement).value
    const newAnswers: ITest[] = [...answers]
    newAnswers[questionIndex - 1].selected = [elValue]
    console.log(newAnswers)
    setAnswers(newAnswers)
  }

  const onClickHandlerNew = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setQuestionIndex(value)
  }
  useEffect(() => {
    if (selectedTest.id === '') navigate('/tests')
  }, [])

  if (selectedTest.id === '') return null
  return (
    <>
      <Stack spacing={4}>
        <FormControl>
          <Stack spacing={4}>
            <FormLabel id="demo-radio-buttons-group-label">
              <Typography variant="h4">
                Question: {selectedTest.test[questionIndex - 1].question}
              </Typography>
            </FormLabel>
            <RadioGroup
              aria-labelledby="answers-radio-buttons-group"
              name={selectedTest.test[questionIndex - 1].question}
              onChange={onChangeHandler}
              // defaultValue=""
              value={
                answers[questionIndex - 1].selected.length
                  ? answers[questionIndex - 1].selected[0]
                  : ''
              }
            >
              <List>
                {selectedTest.test[questionIndex - 1].answers.map((el, i) => (
                  <ListItem disablePadding button>
                    <FormControlLabel
                      value={i}
                      control={<Radio />}
                      label={el.text}
                      sx={{ width: '100%', margin: 0 }}
                    />
                  </ListItem>
                ))}
              </List>
            </RadioGroup>
          </Stack>
        </FormControl>
        <Pagination
          count={selectedTest.test.length}
          page={questionIndex}
          onChange={onClickHandlerNew}
          siblingCount={0}
          variant="outlined"
          color="primary"
          shape="rounded"
          size="large"
        />
      </Stack>
      <Button fullWidth={false} variant="contained" color="primary">
        Finish
      </Button>
    </>
  )
}

export default Test
