import { useQuery } from 'hooks/useQuery'
import { useNavigate } from 'react-router-dom'

export const useSignInApi = () => {
  const navigate = useNavigate()

  const redirectToTodo = () => {
    navigate('/todo')
  }

  const handleSignInSuccess = () => {
    redirectToTodo()
  }

  const handleSignInFailure = () => {
    alert('중복된 이메일입니다.')
  }

  const { query } = useQuery({
    method: 'post',
    url: `/auth/signin`,
    onSuccess: handleSignInSuccess,
    onFailure: handleSignInFailure,
  })
  return query
}
