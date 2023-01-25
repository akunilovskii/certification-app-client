import React from 'react'
import { IQuestion } from '../store/interfaces'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/system'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'

interface Props {
  answers: IQuestion[]
  open: boolean
  onClose: () => void
}

function TestResult({ answers, open, onClose }: Props) {
  const navigate = useNavigate()

  const isAnswerCorrect = (el: IQuestion) =>
    el.selected.reduce(
      (acc: boolean, i: number) => acc && el.answers![i].correct,
      true
    )

  const rightAnswersCount = answers.reduce(
    (acc, el) => acc + (isAnswerCorrect(el) ? 1 : 0),
    0
  )

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => onClose()}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Test results:</DialogTitle>
        <DialogContent
          sx={{ display: 'flex', gap: '10px', flexDirection: 'column' }}
        >
          {answers.map((el, i) => (
            <Box key={i} sx={{ display: 'flex', alignItems: 'center' }}>
              {isAnswerCorrect(el) ? (
                <CheckCircleOutlineIcon color={'success'} />
              ) : (
                <CancelOutlinedIcon color={'error'} />
              )}
              <Box
                sx={{ ml: '10px', display: 'flex', flexDirection: 'column' }}
              >
                <Typography variant="body1">
                  {`${i + 1}: Question: ${el.question}`}
                </Typography>
                <Typography variant="body1">
                  {`
              Your answer${el.selected.length > 1 ? 's' : ''} : ${el.selected
                    .map((i) => el.answers![i].text)
                    .join(', ')} `}
                </Typography>
              </Box>
            </Box>
          ))}
        </DialogContent>
        <DialogContent>
          <Typography variant="body1">
            {`Number of right answers: ${rightAnswersCount}`}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => {
              onClose()
              navigate('/tests')
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default TestResult
