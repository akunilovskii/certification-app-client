import React, {
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { Grid } from '@mui/material'
import TestFormFields from '../../components/TestFormFields'
import { ITest } from '../../store/tests-store'
import TestsList from '../../components/TestsList'
import EditTest from '../../components/EditTest'
import { IProps } from '../../hook/use-filter'

const initialTest = {
  discipline: '',
  subject: '',
  level: '',
  title: '',
  difficulty: '',
  duration: 0,
  questions: [],
}

const CreateTest: FC<any> = (): ReactElement => {
  const [testsList, setTestList] = useState(null)
  const [testId, setTestId] = useState('')
  const [selectedTest, setSelectedTest] = useState(initialTest)
  const [questions, setQuestions] = useState([])

  const closeEditHandler = () => {
    setTestId('')
    setSelectedTest(initialTest)
  }
  const editTest = (id: string) => {
    setTestId(id)
  }
  const createTest = (test: ITest) => {
    console.log('Test: ', test)
    const requestURL = `http://localhost:5000/tests/create`
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: test,
      }),
    }

    fetch(requestURL, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(`Data from createTest response: `, data)

        // setQuestions(data.payload.questions)
        // getTests()
      })
  }
  const saveTest = (test: ITest) => {
    console.log('Test: ', test)
    const requestURL = `http://localhost:5000/tests/create`
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: test,
      }),
    }

    fetch(requestURL, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(`Data from createTest response: `, data)

        // setQuestions(data.payload.questions)
        // getTests()
      })
  }

  const getTests = useCallback(() => {
    const requestURL = `http://localhost:5000/tests/`
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }

    fetch(requestURL, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(`'Get data result: `, data.payload)

        setTestList(data.payload)
      })
  }, [])

  const getTestById = useCallback(async (testId: string) => {
    const requestURL = `http://localhost:5000/tests/${testId}`
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }

    fetch(requestURL, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(`Data from getTestById response: `, data)
        setSelectedTest(data.payload)
        console.log('-----', selectedTest)
      })
  }, [])

  useEffect(() => {
    getTests()
  }, [])

  useEffect(() => {
    if (testId) {
      getTestById(testId)
    }
  }, [testId])

  return (
    <>
      <Grid container item md={8} xs={12} justifyContent="center">
        <TestFormFields
          action={testId ? saveTest : createTest}
          values={selectedTest}
        />
      </Grid>

      {testId ? <></> : <TestsList testsList={testsList} editTest={editTest} />}

      {testId ? (
        <EditTest test={selectedTest} closeEditForm={closeEditHandler} />
      ) : (
        <></>
      )}
    </>
  )
}

export default CreateTest
