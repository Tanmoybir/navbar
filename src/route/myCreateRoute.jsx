import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AvailableFood from "../pages/AvailableFood/AvailableFood";
import AddFood from "../pages/AddFood/AddFood";


const myCreateRoute = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/availableFood',
                element: <AvailableFood/>
            },
            {
                path:'/addFood',
                element: <AddFood/>
            },
        ]
    }
])

export default myCreateRoute;