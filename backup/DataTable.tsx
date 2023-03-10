import * as React from 'react'
import { useContext, useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import Chip from '@mui/material/Chip'
import { Button } from '@mui/material'
import ModalWindow from '../src/components/ModalWindow'
import { useNavigate } from 'react-router-dom'

export default function DataTable(props: any) {
  const testsList = props.testsList

  // const { selectedTest, setSelectedTest } = useContext(DataContext)
  const [modalOpen, setModalOpen] = useState(false)

  const handleClick = (event: any, cellValues: any) => {
    // setSelectedTest(testsList.filter((el: any) => el.id === cellValues.id)[0])
    setModalOpen(true)
  }

  const navigate = useNavigate()
  const onClose = (result: boolean) => {
    setModalOpen(false)
    if (result) {
      navigate('/tests/test')
    }
  }

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      hide: true,
    },
    {
      field: 'number',
      headerName: '№',
      width: 90,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'title',
      headerName: 'Test title',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'difficulty',
      headerName: 'Difficulty',
      headerAlign: 'center',
      align: 'center',
      flex: 0.35,
      renderCell: (params) => {
        return (
          <Chip
            size="small"
            variant="outlined"
            label={params.row.difficulty}
            color={
              params.row.difficulty === 'easy'
                ? 'success'
                : params.row.difficulty === 'standard'
                ? 'warning'
                : 'error'
            }
          />
        )
      },
    },
    {
      field: 'duration',
      headerName: 'Duration',
      flex: 0.3,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'questions',
      headerName: 'Questions',
      flex: 0.3,
      headerAlign: 'center',
      align: 'center',
    },

    {
      field: 'startTest',
      headerName: '',
      sortable: false,
      headerAlign: 'center',
      align: 'center',

      renderCell: (cellValues) => {
        return (
          <Button
            sx={{ color: 'testButton.main' }}
            onClick={(event) => {
              handleClick(event, cellValues)
            }}
          >
            Start
          </Button>
        )
      },
    },
  ]

  const rows = testsList.map((el: any, i: number) => ({
    id: el.id,
    number: i + 1,
    title: el.title,
    difficulty: el.difficulty,
    duration: `${el.duration} min.`,
    questions: el.questions.length,
  }))

  return (
    <div style={{ height: '635px', width: '100%', marginTop: 20 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
      {
        // <ModalWindow
        //   selectedTest={selectedTest}
        //   open={modalOpen}
        //   onClose={onClose}
        // />
      }
    </div>
  )
}
