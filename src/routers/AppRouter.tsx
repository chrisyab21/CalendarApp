import { Navigate, Outlet, useLoaderData } from 'react-router-dom';
import { useAppSelector } from '../Redux/Hooks/TypedHooks';
import { CheckingAuth } from '../calendar/components/CheckingAuth';


export const AppRouter = () => {

  const p = useLoaderData();

  const { status } = useAppSelector(state => state.auth);
  //console.log( p);

  if (status === 'checking') return <CheckingAuth/>

  return <Outlet />
}
