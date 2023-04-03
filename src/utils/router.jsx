// Import modules
import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";

// Import components
import Nav from "../layouts/Nav";
import Footer from "../layouts/Footer";


// Import pages
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Profile from "../pages/Profile";
import Error from "../pages/Error";


import { useSelector } from 'react-redux';

// Import Redux selectors
import { selectAuth } from '../utils/selectors'


// Set standard layout
const Layout = () => (
    <>
        <Nav />
        <Outlet />
        <Footer />
    </>
);

// Set error layout
const ErrorLayout = () => (
    <>
        <Nav />
        <Error />
        <Footer />

    </>
);

// Set profile route
const ProfileRoute = () => {
    // Get auth state
    const auth = useSelector(selectAuth);
    return (
        auth.signed ? <Profile /> : <Navigate to="/sign-in" />
    )

}


// Router configuration
const Router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <ErrorLayout />,
        children: [{
            path: "/",
            element: <Home />,
        },
        {
            path: "sign-in",
            element: <Signin />,
        },
        {
            path: "profile",
            element: <ProfileRoute />,

        },]
    }
]);

export default Router