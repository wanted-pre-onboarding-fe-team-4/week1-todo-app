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
    alert('이메일과 비밀번호를 확인해주세요')
  }

  const { query } = useQuery({
    method: 'post',
    url: `/auth/signin`,
    onSuccess: handleSignInSuccess,
    onFailure: handleSignInFailure,
  })
  return query
}
