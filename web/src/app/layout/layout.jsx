import { routes } from '../../routes'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../../components'

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar />}>
          {
            routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.element}
              />
            ))
          }
        </Route>
      </Routes>
    </>
  )
}

export default Layout