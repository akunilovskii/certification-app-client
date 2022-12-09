import { createContext, ReactNode, useState } from 'react'
import { ITest, IQuestion, tests } from '../store/tests-store'

const DataContext = createContext({
  setItemsList: (
    conditions: {},
    output: string,
    testsArray: ITest[]
  ): String[] => [],
  selectedTest: {
    id: '',
    title: '',
    difficulty: '',
    duration: 0,
    questions: [
      {
        id: '',
        question: '',
        selected: [],
        answers: [{ id: '', text: '', correct: false }],
      },
    ],
  },
  setSelectedTest: (value: IQuestion) => {},
  tests: [],
})

interface Props {
  children: ReactNode
}

export const DataContextProvider = ({ children }: Props) => {
  const testAllConditions = (el: any, conditions: {}) => {
    return Object.entries(conditions).reduce((acc, cond) => {
      return acc && (cond[1] !== '' ? el[cond[0]] === cond[1] : true)
    }, true)
  }

  const emptyTest = {
    id: '',
    title: '',
    difficulty: '',
    duration: 0,
    questions: [
      {
        id: '',
        question: '',
        selected: [],
        answers: [{ id: '', text: '', correct: false }],
      },
    ],
  }
  const [selectedTest, setSelectedTest] = useState<ITest>(emptyTest)

  const setItemsList = (
    conditions: {},
    output: string,
    testsArray: ITest[]
  ) => {
    return testsArray.reduce((acc, el) => {
      if (testAllConditions(el, conditions)) {
        // @ts-ignore
        acc = [...acc, { id: el.id, value: el[output] }]
      }
      return acc.filter(
        (a: any, i: any, self: any) =>
          self.findIndex((s: any) => a.value === s.value) === i
      )
    }, [] as any)
  }

  const dataState = { tests, setItemsList, selectedTest, setSelectedTest }

  return (
    // @ts-ignore
    <DataContext.Provider value={dataState}>{children}</DataContext.Provider>
  )
}

export default DataContext
