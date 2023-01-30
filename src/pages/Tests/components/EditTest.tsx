import { FC, ReactElement, useCallback } from 'react'
import { Box, Button, Paper } from '@mui/material'
import { createTest, updateTest } from '../../../utils/requests-tests'
import { checkForEmptyFields } from '../../../utils/validators'
import { useDebouncer } from '../../../hook/use-debouncer'
import TestFields from './TestFields'
import QuestionsForm from '../../../components/QuestionsForm'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { logoutUser } from '../../../store/reducers/authActions'
import { setAuthError } from '../../../store'

const EditTest: FC<any> = ({
  editMode,
  setEditMode,
  actionHandler,
}): ReactElement => {
  const testValues = useSelector(
    (state: RootState) => state.testValues.testValues
  )

  const debouncedTestValues = useDebouncer(testValues)
  const dispatch = useDispatch()
  const testUpdateHandler = useCallback(async () => {
    if (editMode === 'create') {
      try {
        await createTest(testValues)

        setEditMode('')
      } catch (err) {
        // @ts-ignore
        dispatch(logoutUser())
        dispatch(setAuthError(true))
      }
    }
    if (editMode === 'edit') {
      try {
        await updateTest(testValues._id, testValues)
        setEditMode('')
      } catch (err) {
        // @ts-ignore
        dispatch(logoutUser())
        dispatch(setAuthError(true))
      }
    }
  }, [testValues])

  const buttonIsValid = checkForEmptyFields(debouncedTestValues)

  return (
    <Paper>
      <Box display="flex" flexDirection="column">
        <TestFields editMode={editMode} />
        <QuestionsForm />
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          sx={{ m: '1rem 0.5rem 0.5rem' }}
        >
          <Button
            color="primary"
            variant="outlined"
            size="small"
            onClick={() => actionHandler('close')}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            variant="outlined"
            size="small"
            onClick={testUpdateHandler}
            disabled={!buttonIsValid}
          >
            {editMode === 'edit' ? 'Save test' : 'Create test'}
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}

export default EditTest
