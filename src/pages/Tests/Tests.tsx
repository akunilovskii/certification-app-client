import { FC, useContext, useEffect, useState } from 'react'
import { Box, Button, Grid } from '@mui/material'
import DataContext from '../../context/data-context'
import TestsList from './components/TestsList'
import EditTest from './components/EditTest'
import AuthContext from '../../context/auth-context'
import { deleteTestById, getTests } from '../../utils/requests'
import { NewITest } from '../../store/tests-store'
import TestFields from './components/TestFields'

import type { RootState } from '../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { replaceTests } from '../../store/testsSlice'

const Tests: FC<any> = () => {
  const testsList = useSelector((state: RootState) => state.tests.testsList)
  const dispatch = useDispatch()

  const [editMode, setEditMode] = useState('')

  const { testValues, setTestValues } = useContext(DataContext)
  const [isDeleted, setIsDeleted] = useState(false)
  const { user } = useContext(AuthContext)

  const actionHandler = (mode: string, id?: string) => {
    if (mode === 'create') {
      setEditMode('create')
    }
    if (mode === 'edit' && id) {
      setEditMode('edit')

      const testFilterResult: any = testsList.filter(
        (el: NewITest) => el._id === id
      )[0]

      const testToEdit = {
        ...testFilterResult,
        discipline: testFilterResult.discipline.name,
        level: testFilterResult.level.name,
        subject: testFilterResult.subject.name,
      }
      setTestValues(testToEdit)
    }
    if (mode === 'close') setEditMode('')
  }
  const deleteHandler = (id: string) => {
    deleteTestById(id)
    setIsDeleted(true)
  }

  const getTestsFromDatabase = async () => {
    const testsFromServer = { ...(await getTests()) }.payload
    dispatch(replaceTests(testsFromServer))
  }

  useEffect(() => {
    if (!editMode) {
      getTestsFromDatabase()
    }
  }, [editMode])

  useEffect(() => {
    if (isDeleted) {
      getTestsFromDatabase()
      setIsDeleted(false)
    }
  }, [isDeleted])

  const filteredTestsList = testsList.filter(
    (el: any) =>
      (testValues.discipline
        ? testValues.discipline === el.discipline.name
        : true) &&
      (testValues.level ? testValues.level === el.level.name : true) &&
      (testValues.subject ? testValues.subject === el.subject.name : true)
  )

  return (
    <>
      {editMode ? (
        <EditTest
          editMode={editMode}
          setEditMode={setEditMode}
          actionHandler={actionHandler}
          setTestValues={setTestValues}
        />
      ) : (
        <Grid container item md={8} xs={12} justifyContent="center">
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            width="100%"
            alignItems="flex-end"
          >
            <TestFields editMode={editMode} />
          </Box>
          {user.role === 'admin' ? (
            <Button
              color="primary"
              variant="outlined"
              size="small"
              onClick={() => actionHandler('create')}
            >
              Create test
            </Button>
          ) : (
            <></>
          )}
          <TestsList
            filteredTestsList={filteredTestsList}
            deleteHandler={deleteHandler}
            actionHandler={actionHandler}
          />
        </Grid>
      )}
    </>
  )
}

export default Tests
