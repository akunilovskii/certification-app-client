import { FC, ReactElement, useState } from 'react'
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material'

import { tests } from '../../store/tests-store'

const Tests: FC<any> = (): ReactElement => {
  const [discipline, setDiscipline] = useState('')
  const handleDisciplineChange = (event: SelectChangeEvent) => {
    setDiscipline(event.target.value)
  }
  const [level, setLevel] = useState('')
  const handleLevelChange = (event: SelectChangeEvent) => {
    setLevel(event.target.value)
  }
  const [subject, setSubject] = useState('')
  const handleSubjectChange = (event: SelectChangeEvent) => {
    setSubject(event.target.value)
  }

  const testsList = tests.reduce((acc, el) => {
    if (
      discipline
        ? el.discipline === discipline
        : true && level
        ? el.level === level
        : true && subject
        ? el.subject === subject
        : true
    ) {
      acc = [...acc, ...el.tests]
    }
    return acc
  }, [] as any)

  const [test, setTest] = useState('')

  const handleTestChange = (event: SelectChangeEvent) => {
    setTest(event.target.value)
  }

  return (
    <>
      <Typography variant="h3" color="text.primary">
        {`Tests - ${discipline} - ${level}`}
      </Typography>
      <Grid container item md={8} xs={12} justifyContent="center">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="discipline-label">Discipline</InputLabel>
          <Select
            labelId="discipline-label"
            id="discipline"
            value={discipline}
            onChange={handleDisciplineChange}
            label="Discipline"
          >
            <MenuItem value="">
              <em>All disciplines</em>
            </MenuItem>
            {tests.map((el) => (
              <MenuItem key={el.id} value={el.discipline}>
                {el.discipline}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="level-label">Level</InputLabel>
          <Select
            labelId="level-label"
            id="level"
            value={level}
            onChange={handleLevelChange}
            label="Level"
          >
            <MenuItem value="">
              <em>All levels</em>
            </MenuItem>
            {tests.map((el) => (
              <MenuItem key={el.id} value={el.level}>
                {el.level}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="subject-label">Subject</InputLabel>
          <Select
            labelId="subject-label"
            id="subject"
            value={subject}
            onChange={handleSubjectChange}
            label="Subject"
          >
            <MenuItem value="">
              <em>All subjects</em>
            </MenuItem>
            {tests.map((el) => (
              <MenuItem key={el.id} value={el.subject}>
                {el.subject}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="tests-label">Tests</InputLabel>
          <Select
            labelId="tests-label"
            id="tests"
            value={test}
            onChange={handleTestChange}
            label="Tests"
          >
            <MenuItem value="">
              <em>All tests</em>
            </MenuItem>
            {testsList.map((el: any) => (
              <MenuItem key={el.id} value={el.title}>
                {el.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </>
  )
}

export default Tests
