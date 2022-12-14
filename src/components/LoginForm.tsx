import { Button, Grid, TextField, TextFieldProps } from '@mui/material'
import { FC, useContext, useEffect, useRef } from 'react'
import useInput from '../hook/use-input'
import {
  emailValidation,
  passwordValidation,
  rePasswordValidation,
} from '../utils/validators'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/auth-context'

const LoginForm: FC<{ index: number }> = ({ index }) => {
  const { user, loginHandler } = useContext(AuthContext)
  const email = useRef<TextFieldProps>(null)
  const newPassword = useRef<TextFieldProps>(null)
  const rePassword = useRef<TextFieldProps>(null)
  const navigate = useNavigate()
  const [emailInputStates, emailProps] = useInput(emailValidation)
  const [passwordInputStates, passwordProps] = useInput(passwordValidation)
  const [rePasswordInputStates, rePasswordProps] = useInput(
    rePasswordValidation,
    passwordProps.value
  )

  useEffect(() => {
    if (user.isLoggedIn) {
      formReset()
      navigate('/')
    }
  }, [user.isLoggedIn])

  const getForm = (...inputStates: any) => {
    const formIsValid = inputStates.reduce(
      (prev: any, curr: any) => prev && curr.isValid,
      true
    )
    const formReset = () => {
      for (let inputState of inputStates) {
        inputState.reset()
      }
    }

    return { formIsValid, formReset }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    loginHandler(emailProps.value, passwordProps.value)
  }

  const { formIsValid, formReset } = getForm(
    ...[emailInputStates, passwordInputStates, rePasswordInputStates].filter(
      (__, i) => i < index + 2
    )
  )

  const formRows = [
    {
      label: 'Email',
      type: 'email',
      ref: email,
      validation: emailValidation,
      props: { ...emailProps },
    },
    {
      label: 'Password',
      type: 'password',
      ref: newPassword,
      validation: passwordValidation,
      props: { ...passwordProps },
    },
    {
      label: 'Re-enter password',
      type: 'password',
      ref: rePassword,
      validation: passwordValidation,
      props: { ...rePasswordProps },
      index: 1,
    },
  ]

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        direction="column"
        alignItems="center"
        height="100%"
        sx={{ gap: '1rem', justifyContent: 'center', padding: '1rem' }}
      >
        {formRows
          .filter((el) => (index ? true : el.index !== 1))
          .map((el) => (
            <TextField
              key={el.label}
              inputRef={el.ref}
              label={el.label}
              type={el.type}
              fullWidth
              size="small"
              {...el.props}
            />
          ))}

        <Button type="submit" variant="contained" disabled={!formIsValid}>
          {index ? 'Register' : 'Login'}
        </Button>
      </Grid>
    </form>
  )
}

export default LoginForm
