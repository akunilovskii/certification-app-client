import { FC, ReactElement, useContext, useEffect } from 'react'
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import useFilter from '../hook/use-filter'
import DataContext from '../context/data-context'

const TestFormFields: FC<any> = ({ action, values }): ReactElement => {
  const disciplineProps = useFilter('')
  const levelProps = useFilter('')
  const subjectProps = useFilter('')
  const titleProps = useFilter('')
  const difficultyProps = useFilter('')
  const durationProps = useFilter(0)
  const { setItemsList, tests } = useContext(DataContext)

  useEffect(() => {
    disciplineProps.setValue(values.discipline.name)
    levelProps.setValue(values.level.name)
    subjectProps.setValue(values.subject.name)
    titleProps.setValue(values.title)
    difficultyProps.setValue(values.difficulty)
    durationProps.setValue(values.duration)
  }, [values])
  const actionHandler = () => {
    action({
      discipline: disciplineProps.props.value,
      subject: subjectProps.props.value,
      level: levelProps.props.value,
      test: {
        title: titleProps.props.value,
        difficulty: difficultyProps.props.value,
        duration: durationProps.props.value,
        questions: [],
      },
    })
    disciplineProps.reset()
    levelProps.reset()
    subjectProps.reset()
    titleProps.reset()
    difficultyProps.reset()
    durationProps.reset()
  }

  return (
    <>
      <FormControl variant="standard" sx={{ m: '0.5rem', minWidth: 120 }}>
        <InputLabel id="discipline-label">Discipline</InputLabel>
        <Select
          labelId="discipline-label"
          id="discipline"
          {...disciplineProps.props}
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
      <FormControl variant="standard" sx={{ m: '0.5rem', minWidth: 120 }}>
        <InputLabel id="level-label">Level</InputLabel>
        <Select
          labelId="level-label"
          id="level"
          {...levelProps.props}
          label="Level"
        >
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
      <FormControl variant="standard" sx={{ m: '0.5rem', minWidth: 120 }}>
        <InputLabel id="subject-label">Subject</InputLabel>
        <Select
          labelId="subject-label"
          id="subject"
          {...subjectProps.props}
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
      <FormControl variant="standard" sx={{ m: '0.5rem', minWidth: 120 }}>
        <TextField
          label="Test title"
          type="text"
          size="small"
          {...titleProps.props}
        />
      </FormControl>
      <FormControl variant="standard" sx={{ m: '0.5rem', minWidth: 120 }}>
        <Select
          labelId="subject-difficulty"
          id="difficulty"
          {...difficultyProps.props}
          label="Difficulty"
        >
          <MenuItem value="easy">Easy</MenuItem>
          <MenuItem value="standard">Standard</MenuItem>
          <MenuItem value="hard">Hard</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: '0.5rem', minWidth: 120 }}>
        <TextField
          label="Duration"
          type="text"
          size="small"
          {...durationProps.props}
        />
      </FormControl>
      <Button
        color="primary"
        variant="outlined"
        size="small"
        disabled={
          disciplineProps.props.value === '' ||
          levelProps.props.value === '' ||
          subjectProps.props.value === '' ||
          titleProps.props.value === '' ||
          difficultyProps.props.value === ''
        }
        onClick={actionHandler}
      >
        {values._id ? 'Save test' : 'Create test'}
      </Button>
    </>
  )
}

export default TestFormFields
