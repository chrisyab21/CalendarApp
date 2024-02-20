import { RouteObject } from "react-router-dom";
import { CalendarPage } from "../pages/CalendarPage";


export const CalendarRoutes:RouteObject[] = [

    {
        path: '/',
        element: <CalendarPage/>,
    },

]