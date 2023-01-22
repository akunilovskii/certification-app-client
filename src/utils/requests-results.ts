import { IResult } from '../store/interfaces'
import { PROXY } from '../store/reducers/authActions'
import API from './interceptorsAPI'

export const createResult = async (result: IResult) => {
  try {
    await API.post('/result/create', { ...result })
  } catch (error: any) {
    throw new Error(error)
  }
}

export const updateResult = async (resultId: string, result: IResult) => {
  try {
    await API.put(`${PROXY}/result/${resultId}`, { ...result })
  } catch (error: any) {
    throw new Error(error)
  }
}

export const getResults = async () => {
  try {
    return await API(`${PROXY}/result/`)
  } catch (error: any) {
    throw new Error(error)
  }
}

export const deleteResultById = async (resultId: string) => {
  try {
    return await API.delete(`${PROXY}/result/${resultId}`)
  } catch (error: any) {
    console.log('Delete result Error: 💥💥💥💥💥💥💥💥💥💥')
    throw new Error(error)
  }
}
