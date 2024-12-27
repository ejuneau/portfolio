import './App.css';
import Home from './Pages/Home/Home';
import Header from './Header';
import Footer from './Footer';
import Portfolio from './Portfolio';
import About from './Pages/About/About';
import Project from './Project';
import NotFound from './NotFound.js';
import Contact from './Pages/Contact/Contact';
import { createBrowserRouter, ScrollRestoration } from 'react-router-dom';
import { Outlet, RouterProvider } from 'react-router';
import { useState, useEffect } from 'react';


function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const setLightMode = () => document.documentElement.style.cssText = "--background-color: var(--off-white); --text-color: var(--off-black); --image-opacity: var(--light-mode-opacity)";
    const setDarkMode  = () => document.documentElement.style.cssText = "--background-color: var(--off-black); --text-color: var(--off-white); --image-opacity: var(--dark-mode-opacity)";


    const toggleDarkMode = () => {
      //store the CURRENT OPPOSITE of isDarkMode in localstorage
      localStorage.setItem("isDarkMode", JSON.stringify(!isDarkMode))
      //invert the CURRENT VALUE of isDarkMode
      setIsDarkMode(!isDarkMode)
      // if (JSON.parse(localStorage.getItem("isDarkMode"))) {
      //   setDarkMode()
      // } else {
      //   setLightMode();

      // }
    
    }

    // Defaults to light mode, eventually will read from user preference
    useEffect(() => {
        console.log(JSON.parse(localStorage.getItem("isDarkMode")))

        if (JSON.parse(localStorage.getItem("isDarkMode"))) { setDarkMode() } 
        else { setLightMode() }
      
    },[])
    useEffect(() => {
      console.log(JSON.parse(localStorage.getItem("isDarkMode")))

      if (JSON.parse(localStorage.getItem("isDarkMode"))) { setDarkMode() } 
      else { setLightMode() }
    
  },[isDarkMode])
    // useEffect(() => {
    //   if (localStorage.getItem("isDarkMode")) {
    //     document.documentElement.style.cssText = "--background-color: var(--off-black); --text-color: var(--off-white); --image-opacity: var(--dark-mode-opacity)";
    //   } else {
    //     document.documentElement.style.cssText = "--background-color: var(--off-white); --text-color: var(--off-black); --image-opacity: var(--light-mode-opacity)";

    //   }
    // })
  const offBlack="#0F0F0F";
  function Page() {

    return(
      <>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <ScrollRestoration />
        <Outlet />
        <Footer />
      </>
    )
  }
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Page />,
      children: [
        {
          path: "/",
          element: <Home offBlack={offBlack}/>
  
        },
        {
          path: "projects",
          element: <Portfolio />
        },
        {
          path: "projects/:projectKey",
          element: <Project />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path:"*",
          element: <NotFound />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
