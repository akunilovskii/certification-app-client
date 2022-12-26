import { NewITest } from '../store/tests-store'
import {PROXY} from "../store/reducers/authActions";

export const createTest = (test: NewITest) => {
  const requestURL = `${PROXY}/tests/create`
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
      // setQuestions(data.payload.questions)
      // getTests()
    })
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
