import { createBrowserRouter } from "react-router-dom"
import { CountriesPage } from "../pages/CountriesPage"
import { CountrieDetailPage } from "../pages/CountrieDetailPage"


export const router = createBrowserRouter([
    {
        path: '/',
        element: < CountriesPage />,
    },
    {
        path: '/country/:name',
        element: < CountrieDetailPage />
    }
])