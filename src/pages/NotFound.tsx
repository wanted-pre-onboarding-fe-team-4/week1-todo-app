import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const NotFoundPage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/signin')
  }, [])
  return <div>Not Found</div>
}
