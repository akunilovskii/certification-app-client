import React, {useState} from 'react'
import {Typography} from '@mui/material'
import {tests} from "../../store/tests-store";

function oldCreateTest() {
    const [index, setIndex] = useState<number>(0)

    const [mongoTests, setMongoTests] = useState({
        id: '',
        title: '',
        difficulty: '',
        duration: 0,
    })
    const onSubmitHandle = async (e: React.SyntheticEvent) => {
        e.preventDefault()
    }

    const sendTest = async (e: React.SyntheticEvent) => {
        e.preventDefault()


        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify( {tests: tests}
                //     {
                //     title: 'Test title 2',
                //     difficulty: 'hard',
                //     duration: 20,
                // }
            ),
        }
        fetch('http://localhost:5000/tests/create', requestOptions)
            .then((response) => response.json())
            .then((data) => console.log('Create test request -> data: ', data))




    }

    return (
        <>
            <label htmlFor="testIndex">Enter test index</label>
            <input id="testIndex" type="number"></input>
            <Typography>Current test index: {index}</Typography>
            <button>Prev</button>
            <button>Next</button>
            <form onSubmit={onSubmitHandle}></form>
            <button onClick={sendTest} type="submit">Send test</button>
        </>
    )
}

export default oldCreateTest
