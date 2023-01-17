import {
  Autocomplete,
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
import { ITest } from '../../../store/interfaces'
import { validateNumberInput } from '../../../utils/validators'
import BackspaceRoundedIcon from '@mui/icons-material/BackspaceRounded'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { setItemsList } from '../../../utils/setItemList'
import { setTestValues } from '../../../store'
import useAutocomplete from '../../../hook/useAutocomplete'

interface ITestFields {
  editMode?: string
  selectedTest?: ITest
}

export interface itemType {
  inputValue?: string
  value: string
  id?: string
}

// const filter = createFilterOptions<itemType | string>();

function TestFields({ editMode }: ITestFields): ReactElement {
  const testsList = useSelector((state: RootState) => state.tests.testsList)
  const testValues = useSelector(
    (state: RootState) => state.testValues.testValues
  )
  const dispatch = useDispatch()

  const disciplineProps = useAutocomplete(
    editMode === 'edit' ? { value: testValues?.discipline } : ''
  )
  const levelProps = useAutocomplete(
    editMode === 'edit' ? { value: testValues?.level } : ''
  )
  const subjectProps = useAutocomplete(
    editMode === 'edit' ? { value: testValues?.subject } : ''
  )

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
        discipline: disciplineProps.props.value?.value || '',
        level: levelProps.props.value?.value || '',
        subject: subjectProps.props.value?.value || '',
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
      <Box
        display="flex"
        flexDirection="row"
        flexWrap={'wrap'}
        width="100%"
        justifyContent="space-between"
      >
        <Autocomplete
          id="discipline"
          sx={{ m: '0.5rem 0.5rem 0', flexGrow: '1', minWidth: 120 }}
          {...disciplineProps.props}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          freeSolo
          options={setItemsList(
            {
              level: editMode ? '' : levelProps.props.value?.value || '',
              subject: editMode ? '' : subjectProps.props.value?.value || '',
            },
            'discipline',
            testsList
          )}
          //@ts-ignore
          renderOption={(props, option) => <li {...props}>{option.value}</li>}
          renderInput={(params) => (
            <TextField {...params} label="Discipline" variant="standard" />
          )}
        />

        <Autocomplete
          id="level"
          sx={{ m: '0.5rem 0.5rem 0', flexGrow: '1', minWidth: 120 }}
          {...levelProps.props}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          freeSolo
          options={setItemsList(
            {
              discipline: editMode
                ? ''
                : disciplineProps.props.value?.value || '',
              subject: editMode ? '' : subjectProps.props.value?.value || '',
            },
            'level',
            testsList
          )}
          //@ts-ignore
          renderOption={(props, option) => <li {...props}>{option.value}</li>}
          renderInput={(params) => (
            <TextField {...params} label="Level" variant="standard" />
          )}
        />

        <Autocomplete
          id="subject"
          sx={{ m: '0.5rem 0.5rem 0', flexGrow: '1', minWidth: 120 }}
          {...subjectProps.props}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          freeSolo
          options={setItemsList(
            {
              discipline: editMode
                ? ''
                : disciplineProps.props.value?.value || '',
              level: editMode ? '' : levelProps.props.value?.value || '',
            },
            'subject',
            testsList
          )}
          //@ts-ignore
          renderOption={(props, option) => <li {...props}>{option.value}</li>}
          renderInput={(params) => (
            <TextField {...params} label="Subject" variant="standard" />
          )}
        />

        <FormControl
          size="small"
          sx={{
            m: '0.5rem 0.5rem 0',
            flexGrow: '2',
            minWidth: 200,
            justifyContent: 'flex-end',
          }}
        >
          <TextField
            variant="standard"
            label="Test title"
            type="text"
            size="small"
            {...titleProps.props}
          />
        </FormControl>

        <FormControl
          variant="standard"
          size="small"
          sx={{
            m: '0.5rem 0.5rem 0',
            flexGrow: '1',
            width: 70,
            justifyContent: 'flex-end',
          }}
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
          sx={{
            m: '0.5rem 0.5rem 0',
            // flexGrow: '1',
            width: 85,
            justifyContent: 'flex-end',
          }}
        >
          <TextField
            variant="standard"
            label="Duration"
            type="tel"
            size="small"
            {...durationProps.props}
          />
        </FormControl>
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
