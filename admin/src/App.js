import './App.css'
import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './components'
import {
  Dashboard,
  Login,
  ForgotPassword,
  ResetPassword,
} from './pages'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/reset-password' element={<ResetPassword />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/admin' element={<MainLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default App