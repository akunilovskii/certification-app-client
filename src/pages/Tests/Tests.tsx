import React, {
  FC,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Box, Button, Grid } from '@mui/material'
import DataContext from '../../context/data-context'
import TestsList from '../../components/TestsList'
import TestsFilterFields from './components/TestsFilterFields'
import EditTest from './components/EditTest'
import AuthContext from '../../context/auth-context'

const Tests: FC<any> = (): ReactElement => {
  const [testsList, setTestList] = useState([])
  const [filterTestConditions, setFilterTestsConditions] = useState({
    discipline: '',
    level: '',
    subject: '',
  })

  const [editMode, setEditMode] = useState(false)
  const actionHandler = (mode: string) => {
    mode === 'open' ? setEditMode(true) : setEditMode(false)
  }

  const { setItemsList } = useContext(DataContext)
  const { user } = useContext(AuthContext)

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
      {editMode ? (
        <EditTest editMode={editMode} testsList={testsList} actionHandler={actionHandler} setFilterTestsConditions={setFilterTestsConditions}/>
      ) : (
        <Grid container item md={8} xs={12} justifyContent="center">
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            width="100%"
            alignItems="flex-end"
          >
            <TestsFilterFields
              testsList={testsList}
              setFilterTestsConditions={setFilterTestsConditions}
            />
            {user.role === 'admin' ? (
              <Button
                color="primary"
                variant="outlined"
                size="small"
                onClick={() => actionHandler('open')}
              >
                Create test
              </Button>
            ) : (
              <></>
            )}
          </Box>
          <TestsList testsList={filteredTestsList} />
        </Grid>
      )}
    </>
  )
}

export default Tests
