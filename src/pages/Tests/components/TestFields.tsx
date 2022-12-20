import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import { ReactElement, useCallback, useEffect } from 'react'
import useFilter from '../../../hook/use-filter'
import { NewITest } from '../../../store/tests-store'
import { validateNumberInput } from '../../../utils/validators'
import BackspaceRoundedIcon from '@mui/icons-material/BackspaceRounded'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { setItemsList } from '../../../utils/setItemList'
import { setTestValues } from '../../../store/reducers/testValuesSlice'

interface ITestFields {
  editMode?: string
  selectedTest?: NewITest
}

function TestFields({ editMode }: ITestFields): ReactElement {
  const testsList = useSelector((state: RootState) => state.tests.testsList)
  const testValues = useSelector(
    (state: RootState) => state.testValues.testValues
  )
  const dispatch = useDispatch()

  const disciplineProps = useFilter(
    editMode === 'edit' ? testValues?.discipline : ''
  )
  const levelProps = useFilter(editMode === 'edit' ? testValues.level : '')
  const subjectProps = useFilter(editMode === 'edit' ? testValues.subject : '')
  const titleProps = useFilter(editMode === 'edit' ? testValues.title : '')
  const difficultyProps = useFilter(
    editMode === 'edit' ? testValues.difficulty : ''
  )
  const durationProps = useFilter(
    editMode === 'edit' ? testValues.duration : '',
    true,
    validateNumberInput
  )

  const resetTestFields = useCallback(() => {
    disciplineProps.reset()
    levelProps.reset()
    subjectProps.reset()
    titleProps.reset()
    difficultyProps.reset()
    durationProps.reset()
  }, [])

  useEffect(() => {
    dispatch(
      setTestValues({
        discipline: disciplineProps.props.value,
        level: levelProps.props.value,
        subject: subjectProps.props.value,
        title: titleProps.props.value,
        difficulty: difficultyProps.props.value,
        duration: +durationProps.props.value,
        questions: editMode === 'edit' ? testValues.questions : [],
        _id: editMode === 'edit' ? testValues._id : '',
      })
    )
  }, [
    disciplineProps.props.value,
    levelProps.props.value,
    subjectProps.props.value,
    titleProps.props.value,
    difficultyProps.props.value,
    durationProps.props.value,
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
                level: editMode ? '' : levelProps.props.value,
                subject: editMode ? '' : subjectProps.props.value,
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
                discipline: editMode ? '' : disciplineProps.props.value,
                subject: editMode ? '' : subjectProps.props.value,
              },
              'level',
              testsList
            ).map((el: any) => {
              return (
                <MenuItem key={el.id} value={el.value}>
                  {el.value}
                </MenuItem>
              )
            })}
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
                discipline: editMode ? '' : disciplineProps.props.value,
                level: editMode ? '' : levelProps.props.value,
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
      </Box>
    </>
  )
}

export default TestFields
