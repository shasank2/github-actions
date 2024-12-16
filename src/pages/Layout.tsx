import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">

          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            <Outlet />
            <Toaster />
            </div>
          </main>
        </div>
      </div>
    </div>
    </>
  )
}

export default Layout
