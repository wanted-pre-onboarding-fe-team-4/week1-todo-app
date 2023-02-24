import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const MainPage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/signin')
  }, [])
  return <div>메인</div>
}
