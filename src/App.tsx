import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Recipes from "./Pages/Recipes";


function App() {

  const Router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {index: true, element: <Home />},
        {path: 'about', element: <About />},
        {path: 'recipes', element: <Recipes />}
      ]
    }
  ])

  return <RouterProvider router={Router} />

}

export default App
