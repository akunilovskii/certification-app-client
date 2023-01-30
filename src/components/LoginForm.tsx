import {
  Button, CircularProgress,
  FormControlLabel,
  Grid,
  List,
  ListItem,
  Radio,
  RadioGroup,
  TextField,
  TextFieldProps,
} from '@mui/material'
import React, {FC, useEffect, useRef, useState} from 'react'
import useInput from '../hook/use-input'
import {
  emailValidation,
  passwordValidation,
  rePasswordValidation,
} from '../utils/validators'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {loginUser, registerUser} from '../store/reducers/authActions'
import {AppDispatch, RootState} from '../store/store'

const LoginForm: FC<{ index: number }> = ({index}) => {
  const params = new URLSearchParams(window.location.search);
  const role = params.get('role');

  const email = useRef<TextFieldProps>(null)
  const newPassword = useRef<TextFieldProps>(null)
  const rePassword = useRef<TextFieldProps>(null)
  const navigate = useNavigate()
  const [userRole, setUserRole] = useState(role === 'teacher' ? 'ADMIN' : 'USER')
  const [emailInputStates, emailProps] = useInput(emailValidation)
  const [passwordInputStates, passwordProps] = useInput(passwordValidation)
  const [rePasswordInputStates, rePasswordProps] = useInput(
      rePasswordValidation,
      passwordProps.value
  )
  const {loading, userInfo, success} = useSelector(
      (state: RootState) => state.user
  )
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if (userInfo.isLoggedIn) navigate('/tests')
  }, [navigate, userInfo.isLoggedIn, success])

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

    return {formIsValid, formReset}
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (emailProps.value && passwordProps.value) {
      if (index) {
        dispatch(
            registerUser({
              email: emailProps.value,
              password: passwordProps.value,
              role: [userRole],
            })
        )
      } else {
        dispatch(
            loginUser({
              email: emailProps.value,
              password: passwordProps.value,
              role: [''],
            })
        )
      }
    }
  }

  const {formIsValid} = getForm(
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
      props: {...emailProps},
    },
    {
      label: 'Password',
      type: 'password',
      ref: newPassword,
      validation: passwordValidation,
      props: {...passwordProps},
    },
    {
      label: 'Re-enter password',
      type: 'password',
      ref: rePassword,
      validation: passwordValidation,
      props: {...rePasswordProps},
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
            sx={{gap: '1rem', justifyContent: 'center', padding: '1rem'}}
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
          {index ? (
              <RadioGroup
                  aria-labelledby="role-radio-buttons-group"
                  name="Chose role"
                  sx={{width: '100%'}}
                  onChange={(e) => setUserRole(e.target.value)}
                  value={userRole}
              >
                <List
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      p: 0,
                    }}
                >
                  <ListItem disablePadding>
                    <FormControlLabel
                        value="ADMIN"
                        control={<Radio size="small"/>}
                        label="Teacher"
                        sx={{width: '100%', margin: 0}}
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <FormControlLabel
                        value="USER"
                        control={<Radio size="small"/>}
                        label="Student"
                        sx={{width: '100%', margin: 0}}
                    />
                  </ListItem>
                </List>
              </RadioGroup>
          ) : (
              <></>
          )}
          <Button
              data-testid="loginForm"
              type="submit"
              variant="contained"
              disabled={!formIsValid || loading}
          >
            {loading ? <CircularProgress color="primary" size="1rem" sx={{mr: '1rem'}}/> : <></>} {index ? 'Register' : 'Login'}
          </Button>
        </Grid>
      </form>
  )
}

export default LoginForm
