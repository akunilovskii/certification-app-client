import { FC, ReactElement, useContext, useState } from 'react'
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import useFilter, { IProps } from '../../hook/use-filter'
import DataContext from '../../context/data-context'
import DataTable from '../Tests/DataTable'

const CreateTest: FC<any> = (): ReactElement => {
  const [testsList, setTestList] = useState(null)
  const [disciplineProps] = useFilter('')
  const [levelProps] = useFilter('')
  const [subjectProps] = useFilter('')
  const [titleProps] = useFilter('')
  const [difficultyProps] = useFilter('')
  const [durationProps] = useFilter(0)
  const [questions, setQuestions] = useState([])

  const { setItemsList } = useContext(DataContext)

  const createTest = () => {
    const emptyTest = {
      title: (titleProps as IProps).value,
      difficulty: (difficultyProps as IProps).value,
      duration: (durationProps as IProps).value,
    }

    const requestURL = `http://localhost:5000/tests/create`
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: {
          //@ts-ignore
          discipline: (disciplineProps as IProps).value,
          //@ts-ignore
          subject: (subjectProps as IProps).value,
          //@ts-ignore
          level: (levelProps as IProps).value,
          test: emptyTest,
        },
      }),
    }

    fetch(requestURL, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(`Data from create'}Test response: `, data)

        setQuestions(data.payload.questions)
      })
  }

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
                level: (levelProps as IProps).value,

                subject: (subjectProps as IProps).value,
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
                discipline: (disciplineProps as IProps).value,

                subject: (subjectProps as IProps).value,
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
                discipline: (disciplineProps as IProps).value,

                level: (levelProps as IProps).value,
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
          <TextField
            label="Test title"
            type="text"
            size="small"
            {...titleProps}
          />
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <Select
            labelId="subject-difficulty"
            id="difficulty"
            {...difficultyProps}
            label="Difficulty"
          >
            <MenuItem value="easy">Easy</MenuItem>
            <MenuItem value="standard">Standard</MenuItem>
            <MenuItem value="hard">Hard</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <TextField
            label="Duration"
            type="text"
            size="small"
            {...durationProps}
          />
        </FormControl>

        {/* <DataTable testsList={testsList} /> */}
      </Grid>
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 120, justifyContent: 'flex-end' }}
      ></FormControl>
      <Button
        color="primary"
        variant="outlined"
        size="small"
        disabled={
          (disciplineProps as IProps).value === '' ||
          (levelProps as IProps).value === '' ||
          (subjectProps as IProps).value === '' ||
          (titleProps as IProps).value === '' ||
          (difficultyProps as IProps).value === ''
        }
        onClick={() => createTest()}
      >
        {'Create test'}
      </Button>
    </>
  )
}

export default CreateTest
