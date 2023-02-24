import { useState, ComponentProps } from 'react'
import { useSignUpApi } from 'api/signUpApi'
import { CommonButton } from 'components/commons/buttons/CommonButton'
import { useLoggedIn } from 'hooks/useLoggedIn'
import { SignUpInput, Wrapper } from './style'
import { useNavigate } from 'react-router-dom'

type OnChangeHandler = ComponentProps<'input'>['onChange']
type OnKeyDownHandler = ComponentProps<'input'>['onKeyDown']
type OnClickHandler = ComponentProps<'button'>['onClick']

export const SignUpPage = () => {
  useLoggedIn()

  const navigate = useNavigate()

  const signupApi = useSignUpApi()

  const [email, setEmail] = useState('')
  const [emailIsValid, setEmailIsvalid] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordlIsValid, setPasswordlIsvalid] = useState(false)
  const submitAvailable = emailIsValid && passwordlIsValid

  const signup = async () => {
    await signupApi({ email, password })
  }

  const handleEmailChange: OnChangeHandler = (e) => {
    const newValue = e.target.value
    setEmail(newValue)
    setEmailIsvalid(newValue.includes('@'))
  }

  const handlePasswordChange: OnChangeHandler = (e) => {
    const newValue = e.target.value
    setPassword(newValue)
    setPasswordlIsvalid(newValue.length >= 8)
  }

  const handleSubmit: OnClickHandler = () => {
    signup()
  }

  const handleEnter: OnKeyDownHandler = (e) => {
    if (e.key === 'Enter') {
      signup()
    }
  }

  const clickHandler: OnClickHandler = () => {
    navigate('/signin')
  }

  return (
    <Wrapper>
      <SignUpInput
        autoFocus={true}
        testId='email-input'
        type='text'
        placeholder='이메일'
        value={email}
        onChange={handleEmailChange}
      />
      <SignUpInput
        testId='password-input'
        type='password'
        placeholder='비밀번호'
        value={password}
        onChange={handlePasswordChange}
        onKeyDown={handleEnter}
      />
      <CommonButton
        testId='signup-button'
        text='회원가입'
        onClick={handleSubmit}
        disabled={!submitAvailable}
        height={80}
      />
      <CommonButton
        text='돌아가기'
        onClick={clickHandler}
        disabled={false}
        height={80}
      />
    </Wrapper>
  )
}
