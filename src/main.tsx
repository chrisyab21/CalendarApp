
import ReactDOM from 'react-dom/client'
import './styles.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { Rutas } from './routers/Rutas.tsx';
import { Provider } from 'react-redux';
import { store } from './Redux/store/store.ts';

const router =  createBrowserRouter(Rutas)

ReactDOM.createRoot(document.getElementById('root')!).render(

    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
 
)
