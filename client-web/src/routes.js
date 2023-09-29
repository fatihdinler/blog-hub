import { 
  Home,
  About,
  Contact,
  Store,
  Blog,
  CompareProduct,
  Wishlist,
} from './app'

const routes = [
  { key: 'home', path: '/', component: <Home /> },
  { key: 'about', path: '/about', component: <About /> },
  { key: 'contact', path: '/contact', component: <Contact /> },
  { key: 'store', path: '/store', component: <Store /> },
  { key: 'blog', path: '/blog', component: <Blog /> },
  { key: 'compare-product', path: '/compare-product', component: <CompareProduct /> },
  { key: 'wishlist', path: '/wishlist', component: <Wishlist /> },
]

export default routes