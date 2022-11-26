import * as React from 'react'
import { useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import Chip from '@mui/material/Chip'
import { Button } from '@mui/material'

export default function DataTable(props: any) {
  const testsList = props.testsList

  const [selectedTest, setSelectedTest] = useState({})

  const handleClick = (event: any, cellValues: any) => {
    setSelectedTest(
      testsList.filter((el: any) => el.id === cellValues.id)[0].test
    )
    console.log('Selected Test: ', selectedTest)
  }
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Test title', flex: 1 },
    {
      field: 'difficulty',
      headerName: 'Difficulty',
      flex: 0.2,
      renderCell: (params) => {
        return (
          <Chip
            size="small"
            variant="outlined"
            label={params.row.difficulty}
            color={
              params.row.difficulty === 'easy'
                ? 'success'
                : params.row.difficulty === 'medium'
                ? 'warning'
                : 'error'
            }
          />
        )
      },
    },
    { field: 'timeLimit', headerName: 'Time limit', width: 135 },
    { field: 'questions', headerName: 'Questions', width: 135 },

    {
      field: 'startTest',
      headerName: '',
      sortable: false,

      renderCell: (cellValues) => {
        return (
          <Button
            color="primary"
            variant="outlined"
            onClick={(event) => handleClick(event, cellValues)}
          >
            Start
          </Button>
        )
      },
    },
  ]

  const rows = testsList.map((el: any) => ({
    id: el.id,
    title: el.title,
    difficulty: el.difficulty,
    timeLimit: `${el.timeLimit} minutes`,
    questions: el.test.length,
  }))

  return (
    <div style={{ height: '635px', width: '100%', marginTop: 20 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        // checkboxSelection
      />
    </div>
  )
}
