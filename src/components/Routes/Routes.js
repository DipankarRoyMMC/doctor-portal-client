import { createBrowserRouter } from "react-router-dom";
import About from "../About/About";
import Appointment from "../Appointment/Appointment/Appointment";
import Home from "../Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import MyAppointment from "../Dashboard/MyAppointment/MyAppointment";
import AdminRoute from "./AdminRoute";
import AllUsers from "../Dashboard/AllUsers/AllUsers";
import AddDoctor from "../Dashboard/AddDoctor/AddDoctor";
import ManageDoctor from "../Dashboard/ManageDoctor/ManageDoctor";

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
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/about',
                element: <PrivateRoute><About></About></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element:
            <PrivateRoute>
                <DashboardLayout></DashboardLayout>
            </PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/managedoctor',
                element: <AdminRoute><ManageDoctor></ManageDoctor></AdminRoute>
            },
        ]
    }

]);

export default router;