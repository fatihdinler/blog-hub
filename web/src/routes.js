import {  
  Page404,
  Blog,
  ChangePassword,
  Dashboard,
  EditProfile,
  Editor,
  Home,
  ManageBlogs,
  Notifications,
  Profile,
  Search,
  UserAuthForm,
} from './app'
import { ROUTE_PATHS } from './shared/constants/route-paths'

export const routes = [
  {
    path: ROUTE_PATHS[404],
    element: <Page404 />
  },
  {
    path: ROUTE_PATHS.BLOG,
    element: <Blog />
  },
  {
    path: ROUTE_PATHS.CHANGE_PASSWORD,
    element: <ChangePassword />
  },
  {
    path: ROUTE_PATHS.DASHBOARD,
    element: <Dashboard />
  },
  {
    path: ROUTE_PATHS.EDIT_PROFILE,
    element: <EditProfile />
  },
  {
    path: ROUTE_PATHS.EDITOR,
    element: <Editor />
  },
  {
    path: ROUTE_PATHS.HOME,
    element: <Home />
  },
  {
    path: ROUTE_PATHS.MANAGE_BLOGS,
    element: <ManageBlogs />
  },
  {
    path: ROUTE_PATHS.NOTIFICATIONS,
    element: <Notifications />
  },
  {
    path: ROUTE_PATHS.PROFOLE,
    element: <Profile />
  },
  {
    path: ROUTE_PATHS.SEARCH,
    element: <Search />
  },
  {
    path: ROUTE_PATHS.SIGN_IN,
    element: <UserAuthForm type={ROUTE_PATHS.SIGN_IN}/>
  },
  {
    path: ROUTE_PATHS.SIGN_UP,
    element: <UserAuthForm type={ROUTE_PATHS.SIGN_UP}/>
  },
]