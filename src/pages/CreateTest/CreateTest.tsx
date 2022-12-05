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
import useFilter from '../../hook/use-filter'
import DataContext from '../../context/data-context'
import { tests } from '../../store/tests-store'
import QuestionsForm from '../../components/QuestionsForm'

const CreateTest: FC<any> = (): ReactElement => {
  const [testID, setTestID] = useState(null)
  console.log(testID)
  const [disciplineProps, resetDiscipline] = useFilter('')
  const [levelProps, resetLevel] = useFilter('')
  const [subjectProps, resetSubject] = useFilter('')
  const [titleProps, resetTitle] = useFilter('')
  const [difficultyProps, resetDifficulty] = useFilter('')
  const [durationProps, resetDuration] = useFilter(0)
  const [questions, setQuestions] = useState([])

  const { setItemsList } = useContext(DataContext)

  const createOrSaveTest = () => {
    // create empty test
    const emptyTest = {
      //@ts-ignore
      title: titleProps.value,
      //@ts-ignore
      difficulty: difficultyProps.value,
      //@ts-ignore
      duration: durationProps.value,
      questions: !testID ? [] : questions,
    }

    console.log('Questions: ', questions)
    const requestOptions = {
      method: testID ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: {
          //@ts-ignore
          discipline: disciplineProps.value,
          //@ts-ignore
          subject: subjectProps.value,
          //@ts-ignore
          level: levelProps.value,
          test: emptyTest,
        },
      }),
    }

    fetch(
      `http://localhost:5000/tests/${testID ? testID : 'create'}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(
          `Data from ${testID ? 'update' : 'create'}Test response: `,
          data
        )
        if (!testID) setTestID(data._id)
        // @ts-ignore
        setQuestions(data.questions)
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
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <TextField
            label="Test title"
            type="text"
            // fullWidth
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
            // fullWidth
            size="small"
            {...durationProps}
          />
        </FormControl>

        {/*<DataTable testsList={testsList} />*/}
      </Grid>
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 120, justifyContent: 'flex-end' }}
      ></FormControl>

      {testID && (
        <QuestionsForm questions={questions} setQuestions={setQuestions} />
      )}
      <Button
        color="primary"
        variant="outlined"
        size="small"
        disabled={
          // @ts-ignore
          disciplineProps.value === '' ||
          // @ts-ignore
          levelProps.value === '' ||
          // @ts-ignore
          subjectProps.value === '' ||
          // @ts-ignore
          titleProps.value === '' ||
          // @ts-ignore
          difficultyProps.value === ''
        }
        onClick={() => createOrSaveTest()}
      >
        {!testID ? 'Create test' : 'Save test'}
      </Button>
    </>
  )
}

export default CreateTest
