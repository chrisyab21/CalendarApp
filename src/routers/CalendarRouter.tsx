
import {Navigate, Outlet} from 'react-router-dom';
import { useAppSelector } from '../Redux/Hooks/TypedHooks';


export const CalendarRouter = () => {

    const {status} = useAppSelector(state => state.auth);

    if(status !== 'authenticated') return <Navigate to={'/auth/login'}/>

    return <Outlet/>
}
