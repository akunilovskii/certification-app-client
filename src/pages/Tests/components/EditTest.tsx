import { FC, ReactElement, useCallback } from 'react'
import { Box, Button, Paper } from '@mui/material'
import { createTest, updateTest } from '../../../utils/requests'
import { checkForEmptyFields } from '../../../utils/validators'
import { useDebouncer } from '../../../hook/use-debouncer'
import TestFields from './TestFields'
import QuestionsForm from '../../../components/QuestionsForm'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'

const EditTest: FC<any> = ({
  editMode,
  setEditMode,
  actionHandler,
}): ReactElement => {
  const testValues = useSelector(
    (state: RootState) => state.testValues.testValues
  )

  const debouncedTestValues = useDebouncer(testValues)

  const testUpdateHandler = useCallback(() => {
    if (editMode === 'create') {
      setEditMode('')
      createTest(testValues)
    }
    if (editMode === 'edit') {
      setEditMode('')
      updateTest(testValues._id, testValues)
    }
  }, [testValues])
  console.log(debouncedTestValues)
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
            {editMode === 'edit' ? 'Save' : 'Create'}
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}

export default EditTest
