import "./App.css"
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import Splash, {loader as splashLoader} from "./components/Splash";
import AdminLogin, {loader as loginLoader} from "./components/AdminLogin";
import AdminRegistration, {loader as registrationLoader} from "./components/AdminRegistration";
import AdminPanel, {loader as adminLoader} from "./components/AdminPanal";
import MainLayout from "./components/MainLayout";
import AdminLayout from "./components/AdminLayout";

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Splash/>} loader={splashLoader}/>
            <Route path="login" element={<AdminLogin/>} loader={loginLoader}/>
            <Route path="register" element={<AdminRegistration/>} loader={registrationLoader}/>
        </Route>

        <Route path="admin" element={<AdminLayout />}>
            <Route index element={<AdminPanel/>} loader={adminLoader}/>
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