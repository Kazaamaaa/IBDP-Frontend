import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import ErrorPage from './pages/404.jsx'
import LandingPage from './pages/landingpage.jsx'
import { ThemeProvider } from '@material-tailwind/react'
import DonorPage from './pages/donor.jsx'
import ForumPage from './pages/forum.jsx'
import ProfilPage from './pages/profil.jsx'
import ArtikelPage from './pages/detailartikel.jsx'
import PageLocation from './pages/lokasi'
import StokPage from './pages/stokdarah'
import DetailCerita from './pages/detailcerita'
import PageSyarat from './pages/syarat'
import PageInformasi from './pages/informasi'
import AboutUs from './pages/about'
import axios from 'axios'
import Dashboard from './pages/admin/Dashboard'
import ArtikelAdd from './pages/admin/artikel/ArtikelAdd'
import ArtikelAll from './pages/admin/artikel/ArtikelAll'
import ArtikelEdit from './pages/admin/artikel/ArtikelEdit'
import UsersAll from './pages/admin/users/UsersAll'
import LandingPageAdmin from './pages/admin/landingPage/LandingPageAdmin'
import LandingPageEdit from './pages/admin/landingPage/LandingPageEdit'
import StoriesAdmin from './pages/admin/stories/StoriesAll'
import PendonorAdmin from './pages/admin/pendonor/PendonorAll'
import GoldarAll from './pages/admin/Goldar/GoldarAll'
import GoldarAdd from './pages/admin/Goldar/GoldarAdd'
import GoldarEdit from './pages/admin/Goldar/GoldarEdit'
import LokasiAll from './pages/admin/lokasi/LokasiAll'
import LokasiAdd from './pages/admin/lokasi/LokasiAdd'
import LokasiEdit from './pages/admin/lokasi/LokasiEdit'
import ResetPassword from './pages/reset'
axios.defaults.withCredentials = true


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "login",
    element: <LoginPage />
  },
  {
    path: "register",
    element: <RegisterPage />
  },
  {
    path: "stokdarah",
    element: <StokPage />
  },
  {
    path: "formdonor",
    element: <DonorPage />
  },
  {
    path: "forumberbagi",
    element: <ForumPage />
  },
  {
    path : "forumberbagi/:id",
    element : <DetailCerita />
  },
  {
    path: "profil",
    element: <ProfilPage />
  },
  {
    path: "syarat",
    element: <PageSyarat />
  },
  {
    path: "informasi",
    element: <PageInformasi />
  },
  {
    path : "about",
    element: <AboutUs />
  },
  {
    path : "artikel/:id",
    element : <ArtikelPage />
  },
  {
    path : "lokasidanjadwal",
    element : <PageLocation />
  },
  {
    path: "admin",
    element : <Dashboard />
  },
  {
    path: "addartikel",
    element: <ArtikelAdd />
  },
  {
    path: "editartikel/:id",
    element: <ArtikelEdit />
  },
  {
    path : "allartikel",
    element: <ArtikelAll />
  },
  {
    path: "usersall",
    element: <UsersAll />
  },
  {
    path: "landingpageadmin",
    element:  <LandingPageAdmin />
  },
  {
    path: "landingpageadmin/:id",
    element:  <LandingPageEdit />
  },
  {
    path: "storiesdata",
    element:  <StoriesAdmin />
  },
  {
    path: "pendonordata",
    element: <PendonorAdmin />
  },
  {
    path: "goldarall",
    element: <GoldarAll />
  },
  {
    path: "goldaradd",
    element: <GoldarAdd />
  },
  {
    path: "editgoldar/:id",
    element: <GoldarEdit />
  },
  {
    path: "lokasiall",
    element: <LokasiAll />
  },
  {
    path: "lokasiadd",
    element: <LokasiAdd />
  },
  {
    path: "lokasiedit/:id",
    element: <LokasiEdit />
  },
  {
    path: "reset-password",
    element: <ResetPassword />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
 