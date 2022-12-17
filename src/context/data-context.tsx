import { createContext, ReactNode, useState } from 'react'
import { ITest, IQuestion, tests, NewITest } from '../store/tests-store'

const emptyTest = {
  // id: '',
  discipline: '',
  level: '',
  subject: '',
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

const DataContext = createContext({
  setItemsList: (
    conditions: {},
    output: string,
    testsArray: NewITest[]
  ): String[] => [],


  testValues: {} as NewITest,
  setTestValues: (value: NewITest) => {},
})

interface Props {
  children: ReactNode
}

export const DataContextProvider = ({ children }: Props) => {
  const [testValues, setTestValues] = useState({} as NewITest)

  const testAllConditions = (el: any, conditions: {}) => {
    return Object.entries(conditions).reduce((acc, cond) => {
      return acc && (cond[1] !== '' ? el[cond[0]].name === cond[1] : true)
    }, true)
  }
  // {
  //     discipline: '',
  //     level: '',
  //     subject: '',
  //     title: '',
  //     difficulty: '',
  //     duration: 0,
  //     questions: [],
  //   }

  const [selectedTest, setSelectedTest] = useState<NewITest>(emptyTest)

  const setItemsList = (
    conditions: {},
    output: string,
    testsArray: ITest[]
  ) => {
    return testsArray.reduce((acc, el) => {
      //send el and conditions to testAllConditions function
      if (testAllConditions(el, conditions)) {
        // @ts-ignore
        acc = [...acc, { id: el[output]._id, value: el[output].name }]
      }

      //returns unique values
      return acc.filter(
        (a: any, i: any, self: any) =>
          self.findIndex((s: any) => a.value === s.value) === i
      )
    }, [] as any)
  }

  const dataState = {

    setItemsList,
    selectedTest,
    setSelectedTest,
    testValues,
    setTestValues,
  }

  return (
    // @ts-ignore
    <DataContext.Provider value={dataState}>{children}</DataContext.Provider>
  )
}

export default DataContext
