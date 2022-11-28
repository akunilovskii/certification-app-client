import {createContext, ReactNode, useState} from 'react'
import {ITests, ITest, tests} from '../store/tests-store'

const DataContext = createContext({
  setItemsList: (conditions: {}, output: string): String[] => [],
  selectedTest: {
    id: '',
    title: '',
    difficulty: '',
    duration: 0,
    test: [{id: '', question: '', answers: [{id:'', text:'', correct: false}]}],
  },
  setSelectedTest: (value: ITest) => {}
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
    test: [{id: '', question: '', answers: [{id:'', text:'', correct: false}]}],
  }
  const [selectedTest, setSelectedTest] = useState<ITests>(emptyTest)

  const setItemsList = (conditions: {}, output: string) => {
    console.log('Map items')
    return tests.reduce((acc, el) => {
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

  const dataState = { setItemsList, selectedTest, setSelectedTest }

  // @ts-ignore
  return (<DataContext.Provider value={dataState}>{children}</DataContext.Provider>)
}

export default DataContext
