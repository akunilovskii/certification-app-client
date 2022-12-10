import React, {FC, ReactElement, useContext, useEffect} from 'react'
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from '@mui/material'
import useFilter, {IProps} from '../../../hook/use-filter'
import DataContext from "../../../context/data-context";

const TestsFilterFields: FC<any> = ({
                                        editMode,
                                        testsList,
                                        setFilterTestsConditions,
                                    }): ReactElement => {
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

    useEffect(() => {
        console.log('render')
        setFilterTestsConditions({
            discipline: (disciplineProps as IProps).value,
            level: (levelProps as IProps).value,
            subject: (subjectProps as IProps).value,
        })
    }, [
        (disciplineProps as IProps).value,
        (levelProps as IProps).value,
        (subjectProps as IProps).value,
    ])

    return (
        <Box display="flex" flexDirection="row">
            <FormControl variant="standard" sx={{m: 1, minWidth: 120, marginBottom: 0}}>
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
                            level: editMode ? '' : levelProps.value,
                            // @ts-ignore
                            subject: editMode ? '' : subjectProps.value,
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
            <FormControl variant="standard" sx={{m: 1, minWidth: 120, marginBottom: 0}}>
                <InputLabel id="level-label">Level</InputLabel>
                <Select labelId="level-label" id="level" {...levelProps} label="Level">
                    <MenuItem value="">
                        <em>All levels</em>
                    </MenuItem>
                    {setItemsList(
                        {
                            // @ts-ignore
                            discipline: editMode ? '' : disciplineProps.value,
                            // @ts-ignore
                            subject: editMode ? '' : subjectProps.value,
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
            <FormControl variant="standard" sx={{m: 1, minWidth: 120, marginBottom: 0}}>
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
                            discipline: editMode ? '' : disciplineProps.value,
                            // @ts-ignore
                            level: editMode ? '' : levelProps.value,
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
                variant="standard"
                sx={{m: 1, minWidth: 120, justifyContent: 'flex-end', marginBottom: 0}}
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
        </Box>
    )
}


export default TestsFilterFields;
