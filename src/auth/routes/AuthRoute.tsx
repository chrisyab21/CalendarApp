
import { RouteObject, Navigate } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";

export const AuthRoutes:RouteObject[] = [

    {
        path: 'login',
        element: <LoginPage/>,
    },
    {
        path: '*',
        element: <Navigate to={'login'}/>,
    },

]