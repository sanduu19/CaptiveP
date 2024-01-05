import "./App.css"
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import Splash, {loader as splashLoader} from "./components/Splash";
import AdminLogin from "./components/AdminLogin";
import AdminRegistration from "./components/AdminRegistration";
import AdminPanel from "./components/AdminPanal";
import MainLayout from "./components/MainLayout";
import AdminLayout from "./components/AdminLayout";

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Splash/>} />
            <Route path="login" element={<AdminLogin/>} />
            <Route path="register" element={<AdminRegistration/>} />
        </Route>

        <Route path="admin" element={<AdminLayout />}>
            <Route index element={<AdminPanel/>} />
            <Route path="test" element={<Splash/>} />
        </Route>
    </>
))

function App() {
  return (
      <RouterProvider router={router} />
  )
}

export default App