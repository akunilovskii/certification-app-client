import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material'
import { ITest } from '../store/interfaces'

interface Props {
  selectedTest: ITest
  open: boolean
  onClose: (result: boolean) => void
}

function ModalWindow({ selectedTest, open, onClose }: Props) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => onClose(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {selectedTest.title}
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Duration: {selectedTest.duration} minutes
          </Typography>
          <Typography variant="body1">
            Difficulty: "{selectedTest.difficulty}"
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => onClose(false)}>
            Cancel
          </Button>
          <Button onClick={() => onClose(true)} autoFocus>
            Start
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ModalWindow
