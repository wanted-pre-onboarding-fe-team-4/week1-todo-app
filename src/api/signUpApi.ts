import { useQuery } from 'hooks/useQuery'

export const useSignUpApi = () => {
  const { query } = useQuery({
    method: 'post',
    url: `/auth/signup`,
  })
  return query
}
