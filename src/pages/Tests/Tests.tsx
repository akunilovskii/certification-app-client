import React, {
  FC,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Grid } from '@mui/material'
import DataContext from '../../context/data-context'
import TestsList from '../../components/TestsList'
import TestsFilterFields from './components/TestsFilterFields'

const Tests: FC<any> = (): ReactElement => {
  const [testsList, setTestList] = useState([])
  const [filterTestConditions, setFilterTestsConditions] = useState({
    discipline: '',
    level: '',
    subject: '',
  })

  const { setItemsList } = useContext(DataContext)

  const getTests = useCallback(() => {
    const requestURL = `http://localhost:5000/tests/`
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }

    fetch(requestURL, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setTestList(data.payload)
      })
  }, [])
  useEffect(() => {
    getTests()
  }, [])

  const filteredTestsList = testsList.filter(
    (el: any) =>
      (filterTestConditions.discipline
        ? filterTestConditions.discipline === el.discipline.name
        : true) &&
      (filterTestConditions.level
        ? filterTestConditions.level === el.level.name
        : true) &&
      (filterTestConditions.subject
        ? filterTestConditions.subject === el.subject.name
        : true)
  )

  return (
    <>
      <Grid container item md={8} xs={12} justifyContent="center">
        <TestsFilterFields
          setItemsList={setItemsList}
          testsList={testsList}
          setFilterTestsConditions={setFilterTestsConditions}
        />

        <TestsList testsList={filteredTestsList} />
      </Grid>
    </>
  )
}

export default Tests
