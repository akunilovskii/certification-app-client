import { FC, ReactElement, useCallback, useContext } from 'react'
import DataContext from '../../../context/data-context'
import { Box, Button, Paper } from '@mui/material'
import {createTest, updateTest} from '../../../utils/requests'
import { checkForEmptyFields } from '../../../utils/validators'
import { useDebouncer } from '../../../hook/use-debouncer'
import TestFields from './TestFields'
import QuestionsForm from "../../../components/QuestionsForm";

const EditTest: FC<any> = ({
  editMode,
  setEditMode,
  testsList,
  actionHandler,
  selectedTest,
}): ReactElement => {
  const { testValues } = useContext(DataContext)
  const debouncedTestValues = useDebouncer(testValues)

  const testUpdateHandler = useCallback(() => {
    if (editMode === 'create') {
      createTest(testValues)
      setEditMode('')
    }
    if (editMode === 'edit') {
      updateTest(selectedTest._id, testValues)
      setEditMode('')
    }
  }, [testValues])

  const buttonIsValid = checkForEmptyFields(debouncedTestValues)

  return (
    <Paper>
      <Box display="flex" flexDirection="column">
        <TestFields
          testsList={testsList}
          editMode={editMode}
          selectedTest={selectedTest}
        />
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
            {editMode}
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}

export default EditTest