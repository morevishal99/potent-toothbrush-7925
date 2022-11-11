import { Routes,Route } from "react-router-dom";
import Home from "../Pages/Home";
import Category from '../Components/Category'
import Login from '../Pages/Login'
import AddToCart from "../Pages/AddToCart";
import Eyes from "../Pages/Womens";
import Face from "../Pages/Mens";
function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
             <Route path="/womens" element={<Face/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path="/mens" element={<Eyes/>}></Route>
            <Route path='/faceprimer/:pId' element={<AddToCart/>}></Route>
           <Route path="/eyes" element={<Eyes/>}></Route>
        </Routes>

    )
}
export default AllRoutes;