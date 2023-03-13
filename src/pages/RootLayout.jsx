import { Outlet } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />  
      </main>
      {/* Outlet is where the child elements render --> rendered in App.js */}
    </>
  )
}

export default RootLayout