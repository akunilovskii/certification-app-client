import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { replaceResults } from '../../../store/reducers/resultsSlice'
import { RootState } from '../../../store/store'
import { getResults } from '../../../utils/requests-results'
import {Box, Chip, Pagination} from "@mui/material";
import {
  DataGrid,
  GridColDef, gridPageCountSelector,
  gridPageSelector,
  GridRenderCellParams,
  useGridApiContext,
  useGridSelector
} from '@mui/x-data-grid';

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
      <Pagination
          color="primary"
          count={pageCount}
          size="small"
          page={page + 1}
          onChange={(event, value) => apiRef.current.setPage(value - 1)}
      />
  );
}
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

  const calcProgress = (questions: {
    title: string
    answer: string[]
    correct: boolean
  }[]) => {

    const progressResult = Math.round((questions.reduce((acc: number, question) => acc + (question.correct ? 1 : 0), 0)) / questions.length * 100);
    return <Chip sx={{fontWeight: '700'}} size="small" variant="outlined" label={`${progressResult}%`} color={progressResult >= 80 ? "success" : progressResult >= 50 ? "warning" : "error"} />
  }

  const columns: GridColDef[] = [
    {
      headerName: 'Date',
      field: 'date',
      flex: 0.6,
      maxWidth: 130,
      align: 'center',
      headerAlign: 'center',
      renderCell: ({ row }: GridRenderCellParams) => (new Intl.DateTimeFormat('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: '2-digit'
                    }).format(new Date(Date.parse(row.createdAt!))))
    },
    {
      headerName: 'Discipline',
      field: 'discipline',
      flex: 0.5,
      renderCell: ({ row }: GridRenderCellParams) => (row.test.discipline.name)
    },
    {
      headerName: 'Level',
      field: 'level',
      flex: 0.5,
      renderCell: ({ row }: GridRenderCellParams) => (row.test.level.name)
    },
    {
      headerName: 'Subject',
      field: 'subject',
      flex: 0.5,
      renderCell: ({ row }: GridRenderCellParams) => (row.test.subject.name)
    },
    {
      headerName: 'Test title',
      field: 'test',
      flex: 1,
      // headerAlign: 'center',
      renderCell: ({ row }: GridRenderCellParams) => (row.test.title)
    },
    {
      headerName: 'Result',
      field: 'result',
      flex: 0.4,
      align: 'center',
      headerAlign: 'center',
      maxWidth: 100,
      renderCell: ({ row }: GridRenderCellParams) => (calcProgress(row.questions))
    },
  ];
  console.log('RL: ', resultsList)

  return (
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
            pagination
            pageSize={5}
            rowsPerPageOptions={[5]}
            components={{
              Pagination: CustomPagination,
            }}
            rows={resultsList} columns={columns} getRowId={(row: any) => row._id}
        />
      </Box>
  );
}

export default UserResults
