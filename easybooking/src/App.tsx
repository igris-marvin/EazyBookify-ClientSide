import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import { AccommodationPage } from "./pages/AccommodationPage"
import { TestAccPage } from "./pages/TestAccPage"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<AccommodationPage />} />
        <Route path="/test/acc" element={<TestAccPage />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
