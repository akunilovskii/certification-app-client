import { FC, ReactElement, useCallback, useContext, useState } from 'react'
import QuestionsForm from '../../../components/QuestionsForm'
import DataContext from '../../../context/data-context'
import { Box, Button, Paper } from '@mui/material'
import { createTest } from '../../../utils/requests'
import { checkForEmptyFields } from '../../../utils/validators'
import { useDebouncer } from '../../../hook/use-debouncer'
import TestFields from './TestFields'

const EditTest: FC<any> = ({
  showCreateEdit,
  setShowCreateEdit,
  testsList,
  actionHandler,
  selectedTest,
}): ReactElement => {
  const { testValues } = useContext(DataContext)
  const debouncedTestValues = useDebouncer(testValues)

  const testUpdateHandler = useCallback(() => {
    createTest(testValues)
    setShowCreateEdit(false)
  }, [testValues])

  const buttonIsValid = checkForEmptyFields(debouncedTestValues)

  return (
    <Paper>
      <Box display="flex" flexDirection="column">
        <TestFields
          testsList={testsList}
          showCreateEdit={showCreateEdit}
          selectedTest={selectedTest}
        />
        {/* <QuestionsForm /> */}
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
            Create
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}

export default EditTest
