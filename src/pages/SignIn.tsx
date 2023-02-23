import { useQuery } from 'hooks/useQuery'
import { useState } from 'react'

export const SignInPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { query: signin } = useQuery({
    method: 'post',
    url: `/auth/signin`,
  })

  const onClickSignin = async () => {
    await signin({ email, password })
  }

  return (
    <div>
      <input onChange={(e) => setEmail(e.target.value)} />
      <input onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => onClickSignin()}>로그인</button>
    </div>
  )
}
