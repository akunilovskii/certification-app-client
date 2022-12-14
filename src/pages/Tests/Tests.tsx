import { FC, useContext, useEffect, useState } from 'react'
import { Box, Button, Grid } from '@mui/material'
import DataContext from '../../context/data-context'
import TestsList from './components/TestsList'
import EditTest from './components/EditTest'
import AuthContext from '../../context/auth-context'
import { deleteTestById, getTests } from '../../utils/requests'
import { NewITest } from '../../store/tests-store'
import TestFields from './components/TestFields'

const Tests: FC<any> = () => {
  const [testsList, setTestList] = useState([])
  const [editMode, setEditMode] = useState('')
  const [showCreateEdit, setShowCreateEdit] = useState(false)
  const { selectedTest, setSelectedTest } = useContext(DataContext)
  const [isDeleted, setIsDeleted] = useState(false)

  const actionHandler = (mode: string, id?: string) => {
    if (mode === 'create') setShowCreateEdit(true)
    if (mode === 'edit' && id) {
      setShowCreateEdit(true)
      const testToEdit = testsList.filter((el: NewITest) => el._id === id)[0]
      setSelectedTest(testToEdit)
    }
    if (mode === 'close') setShowCreateEdit(false)
  }

  const deleteHandler = (id: string) => {
    deleteTestById(id)
    setIsDeleted(true)
  }

  const { testValues, setTestValues } = useContext(DataContext)
  const { user } = useContext(AuthContext)

  const getTestsFromDatabase = async () => {
    const data = await getTests()
    setTestList(data.payload)
  }

  useEffect(() => {
    if (!showCreateEdit) {
      getTestsFromDatabase()
    }
  }, [showCreateEdit])

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
      {showCreateEdit ? (
        <EditTest
          showCreateEdit={showCreateEdit}
          setShowCreateEdit={setShowCreateEdit}
          testsList={testsList}
          actionHandler={actionHandler}
          setTestValues={setTestValues}
          testValues={testValues}
          selectedTest={selectedTest}
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
            <TestFields testsList={testsList} />
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
            testsList={filteredTestsList}
            deleteHandler={deleteHandler}
            actionHandler={actionHandler}
          />
        </Grid>
      )}
    </>
  )
}

export default Tests
