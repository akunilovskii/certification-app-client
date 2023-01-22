import { ITest } from '../store/interfaces'
import { PROXY } from '../store/reducers/authActions'
import API from './interceptorsAPI'

export const createTest = async (test: ITest) => {
  try {
    await API.post('/test/create', { ...test })
  } catch (error: any) {
    throw new Error(error)
  }
}

export const updateTest = async (testId: string, test: ITest) => {
  try {
    await API.put(`${PROXY}/test/${testId}`, { ...test })
  } catch (error: any) {
    throw new Error(error)
  }
}

export const getTests = async () => {
  try {
    return await API(`${PROXY}/test/`)
  } catch (error: any) {
    throw new Error(error)
  }
}

export const deleteTestById = async (testId: string) => {
  try {
    return await API.delete(`${PROXY}/test/${testId}`)
  } catch (error: any) {
    console.log('Delete test Error: 💥💥💥💥💥💥💥💥💥💥')
    throw new Error(error)
  }
}
