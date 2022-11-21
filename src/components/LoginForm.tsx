import { Button, Grid, TextField, TextFieldProps } from '@mui/material'
import { FC, useRef, useContext } from 'react'
import useInput from '../hook/use-input'
import {
  emailValidation,
  passwordValidation,
  rePasswordValidation,
} from '../helper/validators'
import AuthContext from '../context/auth-context'

const LoginForm: FC<{ index: number }> = ({ index }) => {
  const login = useRef<TextFieldProps>(null)
  const password = useRef<TextFieldProps>(null)
  const email = useRef<TextFieldProps>(null)
  const newPassword = useRef<TextFieldProps>(null)
  const rePassword = useRef<TextFieldProps>(null)

  const [emailInputStates, emailProps] = useInput(emailValidation)
  const [passwordInputStates, passwordProps] = useInput(passwordValidation)
  const [rePasswordInputStates, rePasswordProps] = useInput(
    rePasswordValidation,
    passwordProps.value
  )
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

  const { loginHandler } = useContext(AuthContext)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (index && passwordProps.value !== rePasswordProps.value) return
    formReset()
    loginHandler(emailProps.value)
  }

  const { formIsValid, formReset } = getForm(
    ...[emailInputStates, passwordInputStates, rePasswordInputStates].filter(
      (__, i) => i < index + 2
    )
  )

  const formRows = [
    [
      {
        label: 'Login',
        type: 'email',
        ref: login,
        validation: emailValidation,
        props: { ...emailProps },
      },
      {
        label: 'Password',
        type: 'password',
        ref: password,
        validation: passwordValidation,
        props: { ...passwordProps },
      },
    ],
    [
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
      },
    ],
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
        {formRows[index].map((el) => (
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
