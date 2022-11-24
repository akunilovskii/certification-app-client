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

import { ITaxonomy, tests } from '../../store/tests-store'

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

  const testAllConditions = (el: any, conditions: {}) => {
    return Object.entries(conditions).reduce((acc, cond) => {
      return acc && (cond[1] !== '' ? el[cond[0]] === cond[1] : true)
    }, true)
  }

  const setItemsList = (tests: ITaxonomy[], conditions: {}, output: string) => {
    return tests.reduce((acc, el) => {
      if (testAllConditions(el, conditions)) {
        // @ts-ignore
        acc = [...acc, { id: el.id, value: el[output] }]
      }
      return acc.filter(
        (a: any, i: any, self: any) =>
          self.findIndex((s: any) => a.value === s.value) === i
      )
    }, [] as any)
  }

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
            {setItemsList(
              tests,
              {
                level: level,
                subject: subject,
              },
              'discipline'
            ).map((el: any) => (
              <MenuItem key={el.id} value={el.value}>
                {el.value}
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
            {setItemsList(
              tests,
              {
                discipline: discipline,
                subject: subject,
              },
              'level'
            ).map((el: any) => (
              <MenuItem key={el.id} value={el.value}>
                {el.value}
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
            {setItemsList(
              tests,
              {
                discipline: discipline,
                level: level,
              },
              'subject'
            ).map((el: any) => (
              <MenuItem key={el.id} value={el.value}>
                {el.value}
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

            {setItemsList(
              tests,
              {
                discipline: discipline,
                level: level,
                subject: subject,
              },
              'tests'
            ).map((el: any) =>
              el.value.map((res: any) => (
                <MenuItem key={res.id} value={res.title}>
                  {res.title}
                </MenuItem>
              ))
            )}
          </Select>
        </FormControl>
      </Grid>
    </>
  )
}

export default Tests
