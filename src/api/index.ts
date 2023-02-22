import axios, { isAxiosError } from 'axios'

const baseURL = 'https://pre-onboarding-selection-task.shop'

const API = axios.create({
  baseURL,
  withCredentials: true,
})

API.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('access_token')
  if (token) config.headers['Authorization'] = token

  return config
})

API.interceptors.response.use(
  (res) => {
    if (res.config.url === '/auth/signin')
      localStorage.setItem('access_token', res.data.access_token)

    return res
  },
  (e) => {
    if (!isAxiosError(e) && e.response?.status === 401) {
      localStorage.removeItem('access_token')
      window.location.replace('/signin')
    }

    return Promise.reject(e)
  }
)

export default API
