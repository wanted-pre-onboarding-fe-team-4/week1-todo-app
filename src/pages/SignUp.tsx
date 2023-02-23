import { useQuery } from 'hooks/useQuery'
import { useState } from 'react'

const useSignUpApi = () => {
  const { query } = useQuery({
    method: 'post',
    url: `/auth/signup`,
  })
  return query
}

export const SignUpPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signupApi = useSignUpApi()

  const onClickSignup = async () => {
    await signupApi({ email, password })
  }

  return (
    <div>
      <input onChange={(e) => setEmail(e.target.value)} />
      <input onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => onClickSignup()}>회원가입</button>
    </div>
  )
}
