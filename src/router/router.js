import { useRoutes } from 'react-router-dom';
import Loadable from '@loadable/component'


export default function Routers() {

    const Navbar=Loadable(()=>import('../components/Navbar'));
    const Login=Loadable(()=>import('../components/Login'));
    const Home=Loadable(()=>import('../components/Home'));
    const Create=Loadable(()=>import('../components/Create'));
    const BlogDetails=Loadable(()=>import('../components/BlogDetails'));
    const NotFound=Loadable(()=>import('../components/NotFound'));

    const routers = [
    {
        path:'/login',
        element: <Login />
    },
    // {
    //     path:'/register',
    //     element:<Register />
    // },
    {
        path:'/nav',
        element:<Navbar />,
        children:[
            {
                path:'home',
                element:<Home />,
            },
            {
                path:'create',
                element:<Create />
            },
            {
                path:'blogs/:id',
                element:<BlogDetails/>
            }
        ]
    },
    {
        path:'*',
        element:<NotFound/>
    },
    ]
    return useRoutes(routers)
}