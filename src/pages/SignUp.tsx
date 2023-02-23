import { useQuery } from 'hooks/useQuery'
import { useState } from 'react'

export const SignUpPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { query: signup } = useQuery({
    method: 'post',
    url: `/auth/signup`,
  })

  const onClickSignup = async () => {
    await signup({ email, password })
  }

  return (
    <div>
      <input onChange={(e) => setEmail(e.target.value)} />
      <input onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => onClickSignup()}>회원가입</button>
    </div>
  )
}
