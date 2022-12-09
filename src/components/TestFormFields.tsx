import { FC, ReactElement, useContext, useEffect } from 'react'
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import useFilter, { IProps } from '../hook/use-filter'
import DataContext from '../context/data-context'

const TestFormFields: FC<any> = ({ action, values }): ReactElement => {
  const [disciplineProps, resetDiscipline, setDiscipline] = useFilter('')
  const [levelProps, resetLevel, setLevel] = useFilter('')
  const [subjectProps, resetSubject, setSubject] = useFilter('')
  const [titleProps, resetTitle, setTitle] = useFilter('')
  const [difficultyProps, resetDifficulty, setDifficulty] = useFilter('')
  const [durationProps, resetDuration, setDuration] = useFilter(0)
  const { setItemsList, tests } = useContext(DataContext)

  console.log('initial values: ', values)
  useEffect(() => {
    //@ts-ignore
    setDiscipline(values.discipline.name)
    //@ts-ignore
    setLevel(values.level.name)
    //@ts-ignore
    setSubject(values.subject.name)
    //@ts-ignore
    setTitle(values.title)
    //@ts-ignore
    setDifficulty(values.difficulty)
    //@ts-ignore
    setDuration(values.duration)
  }, [values])
  const actionHandler = () => {
    action({
      discipline: (disciplineProps as IProps).value,
      subject: (subjectProps as IProps).value,
      level: (levelProps as IProps).value,
      test: {
        title: (titleProps as IProps).value,
        difficulty: (difficultyProps as IProps).value,
        duration: (durationProps as IProps).value,
        questions: [],
      },
    })
    // @ts-ignore
    resetDiscipline()
    // @ts-ignore
    resetLevel()
    // @ts-ignore
    resetSubject()
    // @ts-ignore
    resetTitle()
    // @ts-ignore
    resetDifficulty()
    // @ts-ignore
    resetDuration()
  }

  return (
    <>
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
              level: '',

              subject: '',
            },
            'discipline',
            tests
          ).map((el: any) => (
            <MenuItem key={el.id} value={el.value}>
              {el.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="level-label">Level</InputLabel>
        <Select labelId="level-label" id="level" {...levelProps} label="Level">
          <MenuItem value="">
            <em>All levels</em>
          </MenuItem>
          {setItemsList(
            {
              discipline: '',

              subject: '',
            },
            'level',
            tests
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
              discipline: '',

              level: '',
            },
            'subject',
            tests
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
        onClick={actionHandler}
      >
        {values._id ? 'Save test' : 'Create test'}
      </Button>
    </>
  )
}

export default TestFormFields
