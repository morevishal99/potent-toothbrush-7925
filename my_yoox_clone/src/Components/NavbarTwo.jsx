import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './NavbarTwo.css'

function NavbarTwo() {
   
    return (
        < div id="main" >
            <div className='navbar'>
                <ul className='navbartop'>
                    <li> UNINTED STATES</li>
                    <li>CUSTOMER CARE</li>
                    <li>FREE STANDARD SHPPIN ON ORDER OVER $250</li>
                    <li>REGISTER</li>
                    <li> <Link to="/login">Login</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default NavbarTwo;












