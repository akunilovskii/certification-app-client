import { NewITest } from '../store/tests-store'
import {PROXY} from "../store/reducers/authActions";
import API from "./interceptorsAPI";

export const createTest = (test: NewITest) => {
  return API.post('/tests/create', {...test})
      .then(({data}) => console.log('Create test request: ', data))
      .catch((err) => {
        console.log('API error: ', err)
        return 'ERROR'
      })
      .finally(() => { })
}

export const updateTest = (testId: string, test: NewITest) => {
  const requestURL = `${PROXY}/tests/${testId}`
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      data: test,
    }),
  }

  fetch(requestURL, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      // setQuestions(data.payload.questions)
      // getTests()
    })
}

export const getTests = () => {
  const requestURL = `${PROXY}/tests/`
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }

  return fetch(requestURL, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
}

export const deleteTestById = (testId: string) => {
  const requestURL = `${PROXY}/tests/${testId}`
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  }

  return fetch(requestURL, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.message)
    })
}
