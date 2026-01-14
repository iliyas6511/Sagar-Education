import { Outlet, useLocation } from "react-router-dom"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import { useEffect } from "react";


const Layout = (props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // remove if you want instant scroll
    });
  }, [pathname]);
  return (
    <>
    <Navbar />
    {props.children}
    <Footer />
      
    </>
  )
}

export default Layout
