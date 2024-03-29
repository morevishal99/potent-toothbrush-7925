import { Link } from "react-router-dom";
import './Navbar.css'
import NavbarTwo from "./NavbarTwo";
import Home from "../Pages/Home";
import Footer from "./Footer"
import { Box } from "@chakra-ui/react";

function Navbar() {
    return (
        <Box  id="main" position={"sticky"} top="0" zIndex={9} >


            <div>{<NavbarTwo />}</div>
            <div className='navbar'>

                {/* <Link style={{ textDecoration: 'none' }} to=''> */}
                    <ul className='ulist'>

                        <li> <Link to="./womens"> Womens </Link> </li>
                        <li> <Link to="./mens"> Mens </Link> </li>

                        <li>Kids</li>
                        <li>/</li>
                        <li>Design+Art</li>

                    </ul>
                {/* </Link> */}
                <div className='logo'>
                    <Link to='/'> <img style={{ width: '70px' }} src="data:image/jpeg;base64,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" alt="logo" />
                    </Link>
                </div>
                <div className='search_icon'>
                    <img src="https://img.icons8.com/ios/50/000000/search--v1.png" alt="logo" />
                    <input id="second4_1" placeholder="Search on Yoox" />
                </div>
                <div className='user'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF9TKfcNs_SOJiNy-CtD7Mx942WEmk92CEkA&usqp=CAU" alt="logo" />

                    <img src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg" alt="logo" />
                </div>
            </div>

            <div>
                <ul className='ulists'>
                    <li>New Arrivals</li>
                    <li>Designs</li>
                    <li>Clothing</li>
                    <li>Shoes</li>
                    <li>Accessories&Bags</li>
                    <li>8By Yoox</li>
                    <li>YooxGen</li>
                    <li>Collaborations</li>
                    <li>Best Deals</li>
                </ul>
            </div>


            {/* <div><Home/></div> */}


        </Box>



    )
}
export default Navbar;