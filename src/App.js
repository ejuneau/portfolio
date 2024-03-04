import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Portfolio from './Portfolio';
import About from './About';
import Project from './Project';
import NotFound from './NotFound.js';
import Contact from './Contact';
import { createBrowserRouter, ScrollRestoration } from 'react-router-dom';
import { Outlet, RouterProvider } from 'react-router';



function App() {
  const offBlack ="#0F0F0F"

  function Page() {

    return(
      <>
      <Header />
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
