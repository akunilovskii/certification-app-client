import { NewITest } from '../store/tests-store'
import { PROXY } from '../store/reducers/authActions'
import API from './interceptorsAPI'

export const createTest = async (test: NewITest) => {
  try {
    await API.post('/tests/create', { ...test })
  } catch (error: any) {
    throw new Error(error)
  }
}

export const updateTest = async (testId: string, test: NewITest) => {
  try {
    await API.put(`${PROXY}/tests/${testId}`, { ...test })
  } catch (error: any) {
    throw new Error(error)
  }
}

export const getTests = async () => {
  try {
    return await API(`${PROXY}/tests/`)
  } catch (error: any) {
    throw new Error(error)
  }
}

export const deleteTestById = async (testId: string) => {
  try {
    return await API.delete(`${PROXY}/tests/${testId}`)
  } catch (error: any) {
    console.log('Delete test Error: 💥💥💥💥💥💥💥💥💥💥')
    throw new Error(error)
  }
}
