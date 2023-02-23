import { useState, ComponentProps } from 'react'
import { useSignInApi } from 'api/signInApi'
import { CommonButton } from 'components/commons/buttons/CommonButton'
import { useLoggedIn } from 'hooks/useLoggedIn'
import { Wrapper, SignInInput } from './style'

type OnChangeHandler = ComponentProps<'input'>['onChange']
type OnKeyDownHandler = ComponentProps<'input'>['onKeyDown']
type OnClickHandler = ComponentProps<'button'>['onClick']

export const SignInPage = () => {
  useLoggedIn()

  const signinApi = useSignInApi()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailValid, setEmailValid] = useState(false)
  const [passwordValid, setPasswordValid] = useState(false)

  const formValid = emailValid && passwordValid

  const signin = async () => {
    await signinApi({ email, password })
  }

  const emailChangeHandler: OnChangeHandler = (e) => {
    setEmail(e.target.value)
    setEmailValid(e.target.value.includes('@'))
  }

  const passwordChangeHandler: OnChangeHandler = (e) => {
    setPassword(e.target.value)
    setPasswordValid(e.target.value.length >= 8)
  }

  const submitHandler: OnClickHandler = () => {
    signin()
  }

  const onKeyDownHandler: OnKeyDownHandler = (e) => {
    if (e.key === 'Enter') {
      signin()
    }
  }

  return (
    <Wrapper>
      <SignInInput
        autoFocus={true}
        testId='email-input'
        type='text'
        placeholder='이메일'
        value={email}
        onChange={emailChangeHandler}
      />
      <SignInInput
        testId='password-input'
        type='password'
        placeholder='비밀번호'
        value={password}
        onChange={passwordChangeHandler}
        onKeyDown={onKeyDownHandler}
      />
      <CommonButton
        testId='signin-button'
        text='로그인11'
        onClick={submitHandler}
        disabled={!formValid}
        height={80}
      />
    </Wrapper>
  )
}
