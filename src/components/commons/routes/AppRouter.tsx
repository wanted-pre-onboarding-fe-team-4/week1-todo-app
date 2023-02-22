import { MainPage } from 'pages/Main'
import { NotFoundPage } from 'pages/NotFound'
import { SignInPage } from 'pages/SignIn'
import { SignUpPage } from 'pages/SignUp'
import { TodoPage } from 'pages/Todo'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/todo' element={<TodoPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}
