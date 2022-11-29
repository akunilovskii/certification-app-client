import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  List,
  ListItem,
  Pagination,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DataContext from '../../context/data-context'
import {ITest, ITests} from '../../store/tests-store'
import TestResult from '../../components/TestResult'

function Test() {
  const navigate = useNavigate()
  const { selectedTest } = useContext(DataContext)
  const [questionIndex, setQuestionIndex] = useState(1)
  useEffect(() => {}, [questionIndex])

  const randomiseAnswers = (selectedTest: ITests):ITest[] => {
    const result = [...selectedTest.test].map(el=>({...el}))

    return result;
  }

  const [answers, setAnswers] = useState<ITest[]>(randomiseAnswers(selectedTest));
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const elValue = +(event.target as HTMLInputElement).value
    const newAnswers: ITest[] = [...answers]
    newAnswers[questionIndex - 1].selected = [elValue]
    setAnswers(newAnswers)
  }
  console.log('Render TEST, selected test: ', selectedTest);

  const checkIfAllSelected = (): boolean => {
    return answers.reduce(
      (acc: boolean, el: ITest) => acc && el.selected.length !== 0,
      true
    )
  }

  const onClickHandler = (event: React.ChangeEvent<unknown>, value: number) => {
    setQuestionIndex(value)
  }

  const [showTestResult, setShowTestResult] = useState(false)
  const finishHandle = (): void => {
    setShowTestResult(!showTestResult);
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
          onChange={onClickHandler}
          siblingCount={0}
          variant="outlined"
          color="primary"
          shape="rounded"
          size="large"
        />
      </Stack>
      <Button
        fullWidth={false}
        variant="contained"
        color="primary"
        disabled={!checkIfAllSelected()}
        onClick={() => finishHandle()}
      >
        Finish
      </Button>
      {showTestResult ? <TestResult answers={answers} open={showTestResult} onClose={()=>setShowTestResult(false)}/> : null}
    </>
  )
}

export default Test
