import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root";
import Home from "./Pages/Home";
const About = React.lazy(() => import("./Pages/About"));
const Recipes = React.lazy(() => import("./Pages/Recipes"));
import './App.css'
const ErrorPage = React.lazy(() => import("./Pages/ErrorPage"))
const RecipeDetails = React.lazy(() => import("./Pages/RecipeDetails"));
import { Suspense } from "react";



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

  return (
    <Suspense fallback={<div className="text-center mt-10 text-emerald-900">Loading...</div>}>
      <RouterProvider router={Router} />
    </Suspense>
  )

}

export default App
