import { 
  Home,
  About,
  Contact
} from './app'

const routes = [
  { path: '/', component: <Home /> },
  { path: '/about', component: <About /> },
  { path: '/contact', component: <Contact /> },
]

export default routes