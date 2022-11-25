import { FC, ReactElement, useState } from 'react'
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'

import { ITaxonomy, tests } from '../../store/tests-store'
import DataTable from "./DataTable";
import * as React from "react";

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

  const resetFilters = () => {
    setDiscipline('');
    setLevel('');
    setSubject('');
  }

  const testsList = setItemsList(
        tests,
        {
          discipline: discipline,
          level: level,
          subject: subject,
        },
    'tests'
).flatMap((el: any) =>
  el.value.map((res: any) => res)
  )

  return (
    <>
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

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, justifyContent: 'flex-end' }}>
          <Button
              color="primary"
              variant="outlined"
              size="small"
              onClick={()=>resetFilters()}
          >
            Reset filters
          </Button>
        </FormControl>

        <DataTable testsList={testsList}/>

      </Grid>
    </>
  )
}

export default Tests
