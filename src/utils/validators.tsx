import { ITest } from '../store/interfaces'

const emailValidation = (value: string) => {
  return /.{3,}@.{3,}\.com/.test(value)
}
const passwordValidation = (value: string) => {
  return value !== ''
}
const rePasswordValidation = (value: string, value2nd: string) => {
  return value !== '' && value === value2nd
}

const checkForEmptyFields = (fieldsObj: ITest) =>
  !Object.entries(fieldsObj).some((el) =>
    el[0] === '_id' ? false : el[1] === ''
  )

const validateNumberInput = (value: any, min = 0, max = 120) => {
  if (!isNaN(Number(value))) {
    if (max && min) return value >= min && value <= max
    if (min) return value >= min
    if (max) return value <= max
  }
  return false
}

export {
  validateNumberInput,
  emailValidation,
  passwordValidation,
  rePasswordValidation,
  checkForEmptyFields,
}
