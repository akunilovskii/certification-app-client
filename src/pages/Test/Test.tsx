import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
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
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { IQuestion } from '../../store/interfaces'
import TestResult from '../../components/TestResult'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { createResult } from '../../utils/requests-results'

function Test() {
  const navigate = useNavigate()
  const { testValues } = useSelector((state: RootState) => state.testValues)
  const userId = useSelector((state: RootState) => state.user.userInfo.id)
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
      return randomizeArray(structuredClone(result))
    },
    [randomizeArray]
  )

  const testCopy = useMemo(
    () => structuredClone(testValues.questions),
    [testValues.questions]
  )

  const randomizedTestResult = useMemo(
    () => randomizeTest(testCopy),
    [randomizeTest, testCopy]
  )
  const [test, setTest] = useState<IQuestion[]>(randomizedTestResult)
  console.log('Test: ', test)

  const resultCreateHandler = useCallback(async () => {
    const questions = test.map((el, i) => ({
      title: el.question,
      answer: [el.answers![el.selected[0]].text],
      correct: el.answers![el.selected[0]].correct,
    }))

    try {
      const testResult = {
        test: testValues._id,
        user: userId,
        questions,
      }
      await createResult(testResult)
    } catch (err) {}
  }, [])

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const elValue = +event.target.value

    console.log('Test: ', test)
    console.log('Value: ', elValue)

    const newTest: IQuestion[] = [...test]
    newTest[questionIndex - 1].selected = [elValue]
    setTest(newTest)
  }

  const checkboxHandleChange = (
    event: ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    const elValue = event.target.checked

    console.log('Test: ', test[questionIndex - 1].selected)
    console.log('CHECK event', elValue, i)

    const newTest: IQuestion[] = [...test]
    if (elValue) {
      !newTest[questionIndex - 1].selected ? newTest[questionIndex - 1].selected = [i] : newTest[questionIndex - 1].selected.push(i)
    } else {
      newTest[questionIndex - 1].selected = newTest[
        questionIndex - 1
      ].selected.filter((el) => el !== i)
    }
    setTest(newTest)
  }

  const checkIfAllSelected = (): boolean => {
    return test.reduce(
      (acc: boolean, el: IQuestion) => acc && !!el.selected,
      true
    )
  }

  const onClickHandler = (event: React.ChangeEvent<unknown>, value: number) => {
    setQuestionIndex(value)
  }

  const [showTestResult, setShowTestResult] = useState(false)
  const finishHandle = (): void => {
    resultCreateHandler()
    setShowTestResult(!showTestResult)
  }

  useEffect(() => {
    if (testValues.id === '') navigate('/tests')
  }, [testValues.id, navigate])

  if (testValues.id === '') return null
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
            {test[questionIndex - 1].shouldSelect === 1 ? (
              <RadioGroup
                aria-labelledby="answers-radio-buttons-group"
                name={test[questionIndex - 1].question}
                onChange={onChangeHandler}
                value={
                  test[questionIndex - 1].selected?.length
                    ? test[questionIndex - 1].selected[0]
                    : ''
                }
              >
                <List>
                  {test[questionIndex - 1].answers!.map((el, i) => (
                    <ListItem disablePadding key={el.id}>
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
            ) : (
              <FormGroup>
                <List>
                  {test[questionIndex - 1].answers!.map((el, i) => (
                    <ListItem disablePadding key={el.id}>
                      <FormControlLabel
                        control={
                          <Checkbox
                              key={el.id}
                            checked={
                              test[questionIndex - 1].selected?.length
                                ? test[questionIndex - 1].selected.includes(i)
                                : false
                            }
                            onChange={(event) => checkboxHandleChange(event, i)}
                          />
                        }
                        label={el.text}
                      />
                    </ListItem>
                  ))}
                </List>
              </FormGroup>
            )}
          </Stack>
        </FormControl>

        {/*<FormControl*/}
        {/*    required*/}
        {/*    error={error}*/}
        {/*    component="fieldset"*/}
        {/*    sx={{ m: 3 }}*/}
        {/*    variant="standard"*/}
        {/*>*/}
        {/*  <FormLabel component="legend">Pick two</FormLabel>*/}

        {/*<FormHelperText>You can display an error</FormHelperText>*/}
        {/*</FormControl>*/}

        <Pagination
          count={testValues.questions.length}
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
