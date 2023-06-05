import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import TestPage from './TestPage/TestPage';
import HomePage from './HomePage/HomePage';
import LoginPage from './LoginPage/LoginPage';
import LoginOutlet from './LoginPage/LoginOutlet/LoginOutlet';
import ForgotPasswordOutlet from './LoginPage/ForgotPasswordOutlet/ForgotPasswordOutlet';
import ForgotPasswordForm from '../components/ForgotPasswordForm/ForgotPasswordForm';




const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: 'login',
        element: <LoginPage />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <LoginOutlet />,
            },
            {
                path: 'forgot-password',
                element: <ForgotPasswordOutlet />,
            },

        ]
    },
    {
        path: 'test',
        element: <TestPage />,
        errorElement: <ErrorPage />,
        // children: []
    },


]);

export default router;