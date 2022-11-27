import { FC, ReactElement, useContext } from 'react'
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'

import DataTable from './DataTable'
import useFilter from '../../hook/use-filter'
import DataContext from '../../context/data-context'

const Tests: FC<any> = (): ReactElement => {
  const [disciplineProps, resetDiscipline] = useFilter('')
  const [levelProps, resetLevel] = useFilter('')
  const [subjectProps, resetSubject] = useFilter('')
  const { setItemsList } = useContext(DataContext)

  const resetFilters = () => {
    // @ts-ignore
    resetDiscipline()
    // @ts-ignore
    resetLevel('')
    // @ts-ignore
    resetSubject('')
  }

  const testsList = setItemsList(
    {
      // @ts-ignore
      discipline: disciplineProps.value,
      // @ts-ignore
      level: levelProps.value,
      // @ts-ignore
      subject: subjectProps.value,
    },
    'tests'
  ).flatMap((el: any) => el.value.map((res: any) => res))

  return (
    <>
      <Grid container item md={8} xs={12} justifyContent="center">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="discipline-label">Discipline</InputLabel>
          <Select
            labelId="discipline-label"
            id="discipline"
            {...disciplineProps}
            label="Discipline"
          >
            <MenuItem value="">
              <em>All disciplines</em>
            </MenuItem>
            {setItemsList(
              {
                // @ts-ignore
                level: levelProps.value,
                // @ts-ignore
                subject: subjectProps.value,
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
            {...levelProps}
            label="Level"
          >
            <MenuItem value="">
              <em>All levels</em>
            </MenuItem>
            {setItemsList(
              {
                // @ts-ignore
                discipline: disciplineProps.value,
                // @ts-ignore
                subject: subjectProps.value,
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
            {...subjectProps}
            label="Subject"
          >
            <MenuItem value="">
              <em>All subjects</em>
            </MenuItem>
            {setItemsList(
              {
                // @ts-ignore
                discipline: disciplineProps.value,
                // @ts-ignore
                level: levelProps.value,
              },
              'subject'
            ).map((el: any) => (
              <MenuItem key={el.id} value={el.value}>
                {el.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl
          variant="standard"
          sx={{ m: 1, minWidth: 120, justifyContent: 'flex-end' }}
        >
          <Button
            color="primary"
            variant="outlined"
            size="small"
            onClick={() => resetFilters()}
          >
            Reset filters
          </Button>
        </FormControl>

        <DataTable testsList={testsList} />
      </Grid>
    </>
  )
}

export default Tests
