import React, { useState } from 'react'
import { tests } from '../../store/tests-store'
import { Typography } from '@mui/material'

function CreateTest() {
  const [index, setIndex] = useState<number>(0)

  const onSubmitHandle = async () => {}

  return (
    <form onSubmit={onSubmitHandle}>
      <label htmlFor="testIndex">Enter test index</label>
      <input id="testIndex" type="number"></input>
      <Typography>Current test index: {index}</Typography>
      <button>Prev</button>
      <button>Next</button>
      <button type="submit">Send</button>
    </form>
  )
}

export default CreateTest
