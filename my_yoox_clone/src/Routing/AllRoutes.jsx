import { Routes,Route } from "react-router-dom";
import Home from "../Pages/Home";
import Category from '../Components/Category'
import Login from '../Pages/Login'
import AddToCart from "../Pages/AddToCart";
import Womens from "../Pages/Womens";
import Mens from "../Pages/Mens";
function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
             <Route path="/womens" element={<Womens/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path="/mens" element={<Mens/>}></Route>
            <Route path='/womens/:pId' element={<AddToCart/>}></Route>
            <Route path='/mens/:pId' element={<AddToCart/>}></Route>
           {/* <Route path="/eyes" element={<Eyes/>}></Route> */}
        </Routes>

    )
}
export default AllRoutes;