import { FC, ReactElement, useCallback } from 'react'
import { Box, Button, Paper } from '@mui/material'
import { createTest, updateTest } from '../../../utils/requests'
import { checkForEmptyFields } from '../../../utils/validators'
import { useDebouncer } from '../../../hook/use-debouncer'
import TestFields from './TestFields'
import QuestionsForm from '../../../components/QuestionsForm'
import {useDispatch, useSelector} from 'react-redux'
import { RootState } from '../../../store/store'
import {logoutUser} from "../../../store/reducers/authActions";

const EditTest: FC<any> = ({
  editMode,
  setEditMode,
  actionHandler,
}): ReactElement => {
  const testValues = useSelector(
    (state: RootState) => state.testValues.testValues
  )

  const debouncedTestValues = useDebouncer(testValues)
 const dispatch = useDispatch();
  const testUpdateHandler = useCallback(async () => {
    if (editMode === 'create') {
      setEditMode('')
      const result = await createTest(testValues)
        console.log('Test create result: ', result)
      if (result === 'ERROR') {
        // @ts-ignore
        dispatch(logoutUser());
      }
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
