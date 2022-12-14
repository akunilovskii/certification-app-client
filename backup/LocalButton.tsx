import Button, { ButtonProps } from '@mui/material/Button'
import { alpha, styled } from '@mui/material/styles'

const SuccessButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'mode',
})<{ mode?: string }>(({ theme, mode }) => ({
  color: theme.palette.success.main,
  '& .MuiSlider-thumb': {
    '&:hover, &.Mui-focusVisible': {
      boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
    },
    '&.Mui-active': {
      boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
    },
  },
}))

export default function StyledCustomization(props: any) {
  return (
    <SuccessButton variant="contained" defaultValue={30}>
      {props.name}
    </SuccessButton>
  )
}
