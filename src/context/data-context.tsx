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


  testValues: {} as NewITest,
  setTestValues: (value: NewITest) => {},
})

interface Props {
  children: ReactNode
}

export const DataContextProvider = ({ children }: Props) => {
  const [testValues, setTestValues] = useState({} as NewITest)


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



  const dataState = {


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
