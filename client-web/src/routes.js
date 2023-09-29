import { 
  Home,
  About,
  Contact,
  Store,
  Blog,
  BlogDetail,
  CompareProduct,
  Wishlist,
  SignIn,
  SignUp,
  ForgotPassword,
  ResetPassword,
} from './app'

const routes = [
  { key: 'home', path: '/', component: <Home /> },
  { key: 'about', path: '/about', component: <About /> },
  { key: 'contact', path: '/contact', component: <Contact /> },
  { key: 'store', path: '/store', component: <Store /> },
  { key: 'blog', path: '/blog', component: <Blog /> },
  { key: 'blog-detail', path: '/blog/:id', component: <BlogDetail /> },
  { key: 'compare-product', path: '/compare-product', component: <CompareProduct /> },
  { key: 'wishlist', path: '/wishlist', component: <Wishlist /> },
  { key: 'sign-in', path: '/sign-in', component: <SignIn />},
  { key: 'sign-up', path: '/sign-up', component: <SignUp /> },
  { key: 'forgot-password', path: '/forgot-password', component: <ForgotPassword /> },
  { key: 'reset-password', path: '/reset-password', component: <ResetPassword /> }
]

export default routes