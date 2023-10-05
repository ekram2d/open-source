import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Home from "../Components/Home/Home/Home";
import { Children } from "react";
import DashBoard from "../layout/Dashboard/DashBoard";
import Navbar from "../pages/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
import AddProject from "../Components/Projects/AddProject";
import User from "../Components/User/User";
import ContributorGrid from "../Components/Contributors/ContributorGrid";



const router = createBrowserRouter([
      {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
            children: [

                  {
                        path: '/',
                        element: <Home />
                  },
                  {
                        path: '/login',
                        element: <Login />
                  },
                  {
                        path: '/signup',
                        element: <SignUp />
                  },
                  {
                        path: '/addproject',
                        element: <AddProject/>
                  },
                  {
                        path: '/user',
                        element: <User/>
                  },
                  {
                        path: '/contributor',
                        element: <ContributorGrid/>
                  },

            ],
      },
      {
            path: 'dashboard',
            element: <DashBoard />,
            children: [

                  {
                        path: 'userhome',
                        element: <div>userHome</div>
                  },

                  {
                        path: 'home',
                        element: <Footer></Footer>
                  },



            ]
      }

]);

export default router;