import {
    Autocomplete,
    Box,
    Button,
    createFilterOptions,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from '@mui/material'
import {ReactElement, useCallback, useEffect} from 'react'
import useFilter from '../../../hook/use-filter'
import {NewITest} from '../../../store/tests-store'
import {validateNumberInput} from '../../../utils/validators'
import BackspaceRoundedIcon from '@mui/icons-material/BackspaceRounded'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../../store/store'
import {setItemsList} from '../../../utils/setItemList'
import {setTestValues} from '../../../store'
import useAutocomplete from '../../../hook/useAutocomplete'

interface ITestFields {
    editMode?: string
    selectedTest?: NewITest
}

export interface itemType {
    inputValue?: string;
    value: string;
    id?: string;
}

const filter = createFilterOptions<itemType | string>();

function TestFields({editMode}: ITestFields): ReactElement {
    const testsList = useSelector((state: RootState) => state.tests.testsList)
    const testValues = useSelector(
        (state: RootState) => state.testValues.testValues
    )
    const dispatch = useDispatch()

    const disciplineProps = useAutocomplete(editMode === 'edit' ? testValues?.discipline : '')
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
                discipline: disciplineProps.props.value?.value || '',
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
            <Box
                display="flex"
                flexDirection="row"
                flexWrap={'wrap'}
                width="100%"
                justifyContent="space-between"
            >

                <Autocomplete
                    {...disciplineProps.props}
                    filterOptions={(options, params) => {
                        const filtered = filter(options, params);

                        const {inputValue} = params;
                        // Suggest the creation of a new value
                        // @ts-ignore
                        const isExisting = options.some((option) => inputValue === option.value);
                        if (inputValue !== '' && !isExisting) {
                            filtered.push({
                                inputValue,
                                value: `Add "${inputValue}"`,
                            });
                        }

                        return filtered;
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="discipline"
                    options={
                        setItemsList(
                            {
                                level: editMode ? '' : levelProps.props.value,
                                subject: editMode ? '' : subjectProps.props.value,
                            },
                            'discipline',
                            testsList
                        )
                    }

                    //@ts-ignore
                    renderOption={(props, option) => <li {...props}>{option.value}</li>}
                    sx={{m: '0.5rem 0.5rem 0', flexGrow: '2', minWidth: 120}}

                    freeSolo
                    renderInput={(params) => (
                        <TextField {...params} label="Discipline" variant="standard"/>
                    )}
                />


                <FormControl
                    variant="standard"
                    sx={{m: '0.5rem 0.5rem 0', flexGrow: '2', minWidth: 70}}
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
                                discipline: editMode ? '' : disciplineProps.props.value?.value || '',
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
                    sx={{m: '0.5rem 0.5rem 0', flexGrow: '2', minWidth: 80}}
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
                                discipline: editMode ? '' : disciplineProps.props.value?.value || '',
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
                    sx={{m: '0.5rem 0.5rem 0', flexGrow: '2', minWidth: 70}}
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
                    sx={{m: '0.5rem 0.5rem 0', flexGrow: '2', minWidth: 85}}
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
                        flexGrow: '2',
                        maxWidth: 80,
                        minWidth: 80,
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
                        <BackspaceRoundedIcon/>
                    </Button>
                </FormControl>
            </Box>
        </>
    )
}

export default TestFields
