import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import { ReactElement, useCallback, useContext, useEffect } from 'react'
import DataContext from '../../../context/data-context'
import useFilter from '../../../hook/use-filter'
import { NewITest } from '../../../store/tests-store'
import { validateNumberInput } from '../../../utils/validators'
import BackspaceRoundedIcon from '@mui/icons-material/BackspaceRounded'

interface ITestFields {
  testsList: NewITest[]
  showCreateEdit?: string
  selectedTest?: NewITest
}

function TestFields({
  testsList,
  showCreateEdit,
  selectedTest,
}: ITestFields): ReactElement {
  const disciplineProps = useFilter('')
  const levelProps = useFilter('')
  const subjectProps = useFilter('')
  const titleProps = useFilter('')
  const difficultyProps = useFilter('')
  const durationProps = useFilter('', true, validateNumberInput)
  const { setTestValues, setItemsList } = useContext(DataContext)

  const resetTestFields = useCallback(() => {
    disciplineProps.reset()
    levelProps.reset()
    subjectProps.reset()
    titleProps.reset()
    difficultyProps.reset()
    durationProps.reset()
  }, [])

  useEffect(() => {
    setTestValues((prev: NewITest) => {
      return {
        discipline: disciplineProps.props.value,
        level: levelProps.props.value,
        subject: subjectProps.props.value,
        title: titleProps.props.value,
        difficulty: difficultyProps.props.value,
        duration: +durationProps.props.value,
      }
    })
  }, [
    disciplineProps.props.value,
    levelProps.props.value,
    subjectProps.props.value,
    titleProps.props.value,
    difficultyProps.props.value,
    durationProps.props.value,
    setTestValues,
  ])

  return (
    <>
      <Box display="flex" flexDirection="row">
        <FormControl
          variant="standard"
          sx={{ m: '0.5rem', minWidth: 120, marginBottom: 0 }}
        >
          <InputLabel id="discipline-label">Discipline</InputLabel>
          <Select
            labelId="discipline-label"
            id="discipline"
            {...disciplineProps.props}
            label="Discipline"
            size="small"
          >
            <MenuItem value="">
              <em>All disciplines</em>
            </MenuItem>
            {setItemsList(
              {
                level: showCreateEdit ? '' : levelProps.props.value,
                subject: showCreateEdit ? '' : subjectProps.props.value,
              },
              'discipline',
              testsList
            ).map((el: any) => (
              <MenuItem key={el.id} value={el.value}>
                {el.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          variant="standard"
          sx={{ m: '0.5rem', minWidth: 120, marginBottom: 0 }}
        >
          <InputLabel id="level-label">Level</InputLabel>
          <Select
            size="small"
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
                discipline: showCreateEdit ? '' : disciplineProps.props.value,
                subject: showCreateEdit ? '' : subjectProps.props.value,
              },
              'level',
              testsList
            ).map((el: any) => (
              <MenuItem key={el.id} value={el.value}>
                {el.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          variant="standard"
          sx={{ m: '0.5rem', minWidth: 120, marginBottom: 0 }}
        >
          <InputLabel id="subject-label">Subject</InputLabel>
          <Select
            labelId="subject-label"
            id="subject"
            {...subjectProps.props}
            label="Subject"
            size="small"
          >
            <MenuItem value="">
              <em>All subjects</em>
            </MenuItem>
            {setItemsList(
              {
                discipline: showCreateEdit ? '' : disciplineProps.props.value,
                level: showCreateEdit ? '' : levelProps.props.value,
              },
              'subject',
              testsList
            ).map((el: any) => (
              <MenuItem key={el.id} value={el.value}>
                {el.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          size="small"
          sx={{ m: '0.5rem', minWidth: 200, marginBottom: 0 }}
        >
          <TextField
            variant="standard"
            label="Test title"
            type="text"
            size="small"
            {...titleProps.props}
          />
        </FormControl>
        <Box display="flex" flexDirection="row">
          <FormControl
            variant="standard"
            size="small"
            sx={{ m: '0.5rem', minWidth: 120, marginBottom: 0 }}
          >
            <InputLabel id="difficulty-label">Difficulty</InputLabel>

            <Select
              labelId="subject-difficulty"
              id="difficulty"
              label="Difficulty"
              {...difficultyProps.props}
            >
              <MenuItem value="">
                <em>Choose difficulty</em>
              </MenuItem>
              <MenuItem value="easy">Easy</MenuItem>
              <MenuItem value="standard">Standard</MenuItem>
              <MenuItem value="hard">Hard</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            size="small"
            sx={{ m: '0.5rem', maxWidth: 80, marginBottom: 0 }}
          >
            <TextField
              variant="standard"
              label="Duration"
              type="tel"
              size="small"
              {...durationProps.props}
            />
          </FormControl>
        </Box>
        {showCreateEdit ? (
          <></>
        ) : (
          <FormControl
            variant="standard"
            sx={{
              m: '0.5rem',
              justifyContent: 'flex-end',
              marginBottom: 0,
            }}
          >
            <Button
              color="primary"
              size="small"
              onClick={() => resetTestFields()}
            >
              <BackspaceRoundedIcon />
            </Button>
          </FormControl>
        )}
      </Box>
    </>
  )
}

export default TestFields
