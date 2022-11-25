import * as React from 'react'
import {useState} from 'react'
import {DataGrid, GridColDef} from '@mui/x-data-grid'
import Chip from '@mui/material/Chip'
import {Button} from "@mui/material";

export default function DataTable(props: any) {
    const testsList = props.testsList

    const [test, setTest] = useState({})
    const handleClick = (event: any, cellValues: any) => {
        console.log(cellValues)
    }
    const columns: GridColDef[] = [
        {field: 'id', headerName: 'ID', width: 90},
        {field: 'title', headerName: 'Test title', width: 400},
        {
            field: 'difficulty',
            headerName: 'Difficulty',
            width: 135,
            renderCell: (params) => {
                return (
                    <Chip
                        size="small"
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
        {field: 'timeLimit', headerName: 'Time limit', width: 135},
        {field: 'questions', headerName: 'Questions', width: 135},

        {
            field: 'startTest',
            headerName: '',
            sortable: false,
            // width: 140,

            renderCell: (cellValues) => {
                return (
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={(event)=>handleClick(event, cellValues)}
                    >
                        Start
                    </Button>)
            }
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
        <div style={{height: '70vh', width: '100%', marginTop: 20}}>
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
