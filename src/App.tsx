import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Recipes from "./Pages/Recipes";
import './App.css'
import ErrorPage from "./Pages/ErrorPage";
import RecipeDetails from "./Pages/RecipeDetails";



function App() {

  const Router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {index: true, element: <Home />},
        {path: 'about', element: <About />},
        {path: 'recipes', element: <Recipes />},
        { path: 'recipes/:slug', element: <RecipeDetails /> }
  ]}
  ])

  return <RouterProvider router={Router} />

}

export default App
