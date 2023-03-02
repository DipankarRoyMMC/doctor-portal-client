import { createBrowserRouter } from "react-router-dom";
import Appointment from "../Appointment/Appointment/Appointment";
import Home from "../Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }, {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    }

]);

export default router;