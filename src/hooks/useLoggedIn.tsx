import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const useLoggedIn = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const url = window.location.pathname
    const authUrls = ['/signup', '/signin']
    const token = localStorage.getItem('access_token')

    if (!authUrls.includes(url) && !token) navigate('/signin')
    if (authUrls.includes(url) && token) navigate('/todo')
  }, [])
}
