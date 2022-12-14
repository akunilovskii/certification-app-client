import React, { FC, ReactElement } from 'react'
import { TextField, Checkbox } from '@mui/material'
import useFilter from '../hook/use-filter'

const AnswersForm: FC<any> = ({ answers, setAnswers }): ReactElement => {
  const textProps = useFilter('')
  const correctProps = useFilter(false)
  const addAnswer = () => {
    setAnswers((prev: []) => [
      ...prev,
      { text: textProps.props.value, correct: correctProps.props.value },
    ])

    textProps.reset()
    correctProps.reset()
  }

  // @ts-ignore
  return (
    <div>
      <div>
        <TextField
          label="Answer"
          type="text"
          // fullWidth
          size="small"
          {...textProps}
        />
        <button onClick={addAnswer}>add</button>
      </div>
      <ul>
        {answers.map((answer: any, index: number) => (
          <li key={answer._id + index}>
            {answer.text}
            <Checkbox
              {...correctProps}
              inputProps={{ 'aria-label': 'controlled' }}
              // @ts-ignore
              label={correctProps.value ? 'Correct' : 'Incorrect'}
            />

            {answer.correct ? 'correct' : 'incorrect'}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AnswersForm
