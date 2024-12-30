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

import faviconLight from './Assets/favicon-light.png'
import faviconDark from './Assets/favicon-dark.png'


function App() {

    // const updateFavicon = (isDarkMode) => {
    //   let link = document.querySelector("link[rel~='icon']");
    //   if (!link) {
    //     link = document.createElement('link');
    //     link.rel = 'icon';
    //     document.getElementsByTagName('head')[0].appendChild(link);
    //   }
    //   link.ref = isDarkMode ? faviconDark : faviconLight
    // }

    const [ isDarkMode, setIsDarkMode ] = useState(JSON.parse(localStorage.getItem("isDarkMode")))

    const setLightMode = () => {
      localStorage.setItem("isDarkMode", JSON.stringify(false))
      document.documentElement.style.cssText = "--background-color: var(--off-white); --text-color: var(--off-black); --image-opacity: var(--light-mode-opacity)";
      // updateFavicon(false)
      setIsDarkMode(false)
    }
    const setDarkMode  = () => {
      localStorage.setItem("isDarkMode", JSON.stringify(true))
      document.documentElement.style.cssText = "--background-color: var(--off-black); --text-color: var(--off-white); --image-opacity: var(--dark-mode-opacity)";
      // updateFavicon(true)
      setIsDarkMode(true)
}
    const toggleDarkMode = () => {
      if (JSON.parse(localStorage.getItem("isDarkMode"))) {
        setLightMode()
      } else {
        setDarkMode()
      }
      // console.log(`isDarkMode: ${JSON.parse(localStorage.getItem("isDarkMode"))}`)
    }

    useEffect(() => {
      // console.log(JSON.parse(localStorage.getItem("isDarkMode")))
      if (JSON.parse(localStorage.getItem("isDarkMode"))) { setDarkMode() } 
      else { setLightMode() }
  },[])


  useEffect(() => {
    // let link = document.querySelector("link[rel~='icon']");
    // if (!link) {
    //   link = document.createElement('link');
    //   link.rel = 'icon';
    //   document.getElementsByTagName('head')[0].appendChild(link);
    // }
    // link.ref = JSON.parse(localStorage.getItem("isDarkMode")) ? faviconDark : faviconLight

    // console.log(link.ref)
    const updateFavicon = async () => {
      const favicon = document.getElementById('favicon');
      if (JSON.parse(localStorage.getItem("isDarkMode"))) {
        favicon.href = faviconDark
      } else {
        favicon.href = faviconLight
      }
    }

    updateFavicon()
  }, [isDarkMode]);

  function Page() {

    return(
      <>
        <Header toggleDarkMode={toggleDarkMode} />
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
          element: <Home />
  
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
