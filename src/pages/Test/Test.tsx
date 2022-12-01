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
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import DataContext from '../../context/data-context'
import { IQuestion } from '../../store/tests-store'
import TestResult from '../../components/TestResult'

function Test() {
  const navigate = useNavigate()
  const { selectedTest } = useContext(DataContext)
  const [questionIndex, setQuestionIndex] = useState(1)
  useEffect(() => {}, [questionIndex])

  const randomizeArray = useCallback((array: any): any => {
    const result = []
    while (array.length > 1) {
      let index = Math.floor(Math.random() * array.length)
      result.push(...array.splice(index, 1))
    }
    result.push(...array)
    return result
  }, [])

  const randomizeTest = useCallback(
    (testCopy: IQuestion[]): IQuestion[] => {
      const result = testCopy.map((el) => {
        return { ...el, answers: randomizeArray(el.answers) }
      })
      const result2 = randomizeArray(structuredClone(result))
      return result2
    },
    [randomizeArray]
  )

  const testCopy = useMemo(
    () => structuredClone(selectedTest.questions),
    [selectedTest.questions]
  )

  const randomizedTestResult = useMemo(
    () => randomizeTest(testCopy),
    [randomizeTest, testCopy]
  )
  const [test, setTest] = useState<IQuestion[]>(randomizedTestResult)

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const elValue = +(event.target as HTMLInputElement).value
    const newTest: IQuestion[] = [...test]
    newTest[questionIndex - 1].selected = [elValue]
    setTest(newTest)
  }

  const checkIfAllSelected = (): boolean => {
    return test.reduce(
      (acc: boolean, el: IQuestion) => acc && el.selected.length !== 0,
      true
    )
  }

  const onClickHandler = (event: React.ChangeEvent<unknown>, value: number) => {
    setQuestionIndex(value)
  }

  const [showTestResult, setShowTestResult] = useState(false)
  const finishHandle = (): void => {
    setShowTestResult(!showTestResult)
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
                Question: {test[questionIndex - 1].question}
              </Typography>
            </FormLabel>
            <RadioGroup
              aria-labelledby="answers-radio-buttons-group"
              name={test[questionIndex - 1].question}
              onChange={onChangeHandler}
              value={
                test[questionIndex - 1].selected.length
                  ? test[questionIndex - 1].selected[0]
                  : ''
              }
            >
              <List>
                {test[questionIndex - 1].answers.map((el, i) => (
                  <ListItem disablePadding button key={el.id}>
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
          count={selectedTest.questions.length}
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
      {showTestResult ? (
        <TestResult
          answers={test}
          open={showTestResult}
          onClose={() => setShowTestResult(false)}
        />
      ) : null}
    </>
  )
}

export default Test
