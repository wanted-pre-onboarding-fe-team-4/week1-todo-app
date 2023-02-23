import { useQuery } from 'hooks/useQuery'
import { useNavigate } from 'react-router-dom'

export const useSignUpApi = () => {
  const navigate = useNavigate()
  const redirectToSignIn = () => {
    navigate('/signin')
  }

  const handleSignUpSuccess = () => {
    redirectToSignIn()
  }

  const handleSignUpFailure = () => {
    alert('중복된 이메일입니다.')
  }

  const { query } = useQuery({
    method: 'post',
    url: `/auth/signup`,
    onSuccess: handleSignUpSuccess,
    onFailure: handleSignUpFailure,
  })
  return query
}
