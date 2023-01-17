import { FC, useEffect, useState } from 'react'
import { Box, Button, Grid } from '@mui/material'
import TestsList from './components/TestsList'
import EditTest from './components/EditTest'
import { deleteTestById, getTests } from '../../utils/requests-tests'
import { ITest } from '../../store/interfaces'
import TestFields from './components/TestFields'

import type { RootState } from '../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { replaceTests, setAuthError, setTestValues } from '../../store'
import { logoutUser } from '../../store/reducers/authActions'

const Tests: FC<any> = () => {
  const testsList = useSelector((state: RootState) => state.tests.testsList)
  const testValues = useSelector(
    (state: RootState) => state.testValues.testValues
  )
  const dispatch = useDispatch()

  const [editMode, setEditMode] = useState('')
  const [isDeleted, setIsDeleted] = useState(false)

  const { isLoggedIn, roles } = useSelector(
    (state: RootState) => state.user.userInfo
  )

  const actionHandler = (mode: string, id?: string) => {
    if (mode === 'create') {
      setEditMode('create')
    }
    if (mode === 'edit' && id) {
      setEditMode('edit')

      const testFilterResult: any = testsList.filter(
        (el: ITest) => el._id === id
      )[0]

      const testToEdit = {
        ...testFilterResult,
        discipline: testFilterResult.discipline.name,
        level: testFilterResult.level.name,
        subject: testFilterResult.subject.name,
      }
      dispatch(setTestValues(testToEdit))
    }
    if (mode === 'close') setEditMode('')
  }

  const deleteHandler = async (id: string) => {
    try {
      await deleteTestById(id)
      setIsDeleted(true)
    } catch (err) {
      // @ts-ignore
      dispatch(logoutUser())
      dispatch(setAuthError(true))
    }
  }

  const getTestsFromDatabase = async () => {
    if (isLoggedIn) {
      const testsFromServer = { ...(await getTests()) }.data.payload
      dispatch(replaceTests(testsFromServer))
    }
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
        <Grid
          container
          item
          md={8}
          xs={12}
          justifyContent="center"
          rowGap="1rem"
        >
          <Box display="flex" flexDirection="row" width="100%">
            <TestFields editMode={editMode} />
          </Box>
          {/*//TODO change to user.role === 'admin' */}
          {isLoggedIn && roles.includes('ADMIN') ? (
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
