import React from 'react'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { ITests } from '../store/tests-store'

interface Props {
  selectedTest: ITests
  open: boolean
  onClose: () => void
}

function ModalWindow({ selectedTest, open, onClose }: Props) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {selectedTest.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* <Typography>{selectedTest.title}</Typography> */}
            <Typography>Duration: {selectedTest.duration} minutes</Typography>
            <Typography>Difficulty: "{selectedTest.difficulty}"</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onClose} autoFocus>
            Start
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
  // return (
  // <Dialog
  //   open={open}
  //   onClose={onClose}
  //   aria-labelledby="modal-modal-title"
  //   aria-describedby="modal-modal-description"
  // >
  //   <Box sx={{ margin: 'auto' }}>
  //     <Typography>{selectedTest.title}</Typography>
  //     <Typography>{selectedTest.duration}</Typography>
  //     <Typography>{selectedTest.difficulty}</Typography>
  //   </Box>
  // </Dialog>

  // )
}

export default ModalWindow
