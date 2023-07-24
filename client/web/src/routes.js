import Login from './app/login/login'
import Register from './app/register/register'

export const routes = [
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> }
]