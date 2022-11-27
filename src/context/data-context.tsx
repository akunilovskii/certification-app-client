import { createContext, ReactNode } from 'react'
import { tests } from '../store/tests-store'

const DataContext = createContext({
  setItemsList: (conditions: {}, output: string): String[] => [],
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

  // const testsList = setItemsList(
  //   tests,
  //   {
  //     // @ts-ignore
  //     discipline: disciplineProps.value,
  //     // @ts-ignore
  //     level: levelProps.value,
  //     // @ts-ignore
  //     subject: subjectProps.value,
  //   },
  //   'tests'
  // ).flatMap((el: any) => el.value.map((res: any) => res))

  const dataState = { setItemsList }

  return (
    <DataContext.Provider value={dataState}>{children}</DataContext.Provider>
  )
}

export default DataContext
