// Import modules
import { createBrowserRouter, Outlet } from "react-router-dom";

// Import components
import Nav from "../layouts/Nav";
import Footer from "../layouts/Footer";


// Import pages
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Profile from "../pages/Profile";
import Error from "../pages/Error";



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
            element: <Profile />,
        },]
    }
]);

export default Router