import { RouteObject } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { AuthRouter } from "./AuthRouter";
import { AuthRoutes } from "../auth/routes/AuthRoute";
import { CalendarRouter } from "./CalendarRouter";
import { CalendarRoutes } from "../calendar/routes/CalendarRoutes";

const status = 'not-authenticated';

export const Rutas:RouteObject[] = [

    {
        path: '/',
        element: <AppRouter/>,
        loader: () => { const prueba = 'Hola Soy German'; return prueba },
        children: [
            {
                path: 'auth/*',
                element: <AuthRouter />,
                children: AuthRoutes
                
            },
            {
                path: '/',
                element: <CalendarRouter />,
                children: CalendarRoutes
            },


        ]
    },
]