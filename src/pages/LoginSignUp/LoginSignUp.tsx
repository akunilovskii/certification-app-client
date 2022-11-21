import { Grid, Paper } from '@mui/material'
import { FC, useState } from 'react'
import SideImage from '../../components/SideImage'
import TabbedContainer from '../../components/TabbedContainer'

export const LoginSignUp: FC = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Paper sx={{ height: '100%', width: '50%' }}>
      <Grid
        container
        sx={{
          width: '100%',
        }}
      >
        <Grid
          item
          md={4}
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <SideImage />
        </Grid>
        <Grid container item md={8} xs={12}>
          <Grid item container direction="column">
            <TabbedContainer value={value} onChange={handleChange} />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}
