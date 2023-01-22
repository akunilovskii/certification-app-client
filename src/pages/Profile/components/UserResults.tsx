import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { replaceResults } from '../../../store/reducers/resultsSlice'
import { RootState } from '../../../store/store'
import { getResults } from '../../../utils/requests-results'

function UserResults() {
  const dispatch = useDispatch()
  const resultsList = useSelector(
    (state: RootState) => state.results.resultsList
  )
  const getResultsFromDatabase = async () => {
    const resultsFromServer = { ...(await getResults()) }.data.payload
    dispatch(replaceResults(resultsFromServer))
  }

  useEffect(() => {
    getResultsFromDatabase()
  }, [])

  return (
    <Box>
      {resultsList.map((el) => (
        <Box>{el.test}</Box>
      ))}
    </Box>
  )
}

export default UserResults
