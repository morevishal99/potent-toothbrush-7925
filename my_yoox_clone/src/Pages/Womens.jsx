import { Box, Container, Flex, Select } from '@chakra-ui/react';
import AllProducts from '../Components/AllProducts';
import Sorting from '../Components/Sorting';
import data from '../db.json'
import { useEffect, useState } from "react";
import SimpleSlider from '../Components/Slider';
import Footer from '../Components/Footer';
import { useDispatch, useSelector } from "react-redux";
import { getData } from '../Redux/action';

const slideData = [
    { image: "https://images-static.nykaa.com/uploads/b15d2f8f-f4a8-484b-b8b5-13d5dafc68d1.jpg?tr=w-1200,cm-pad_resize" },

    { image: "https://images-static.nykaa.com/uploads/b15d2f8f-f4a8-484b-b8b5-13d5dafc68d1.jpg?tr=w-1200,cm-pad_resize" },

    { image: "https://images-static.nykaa.com/uploads/b15d2f8f-f4a8-484b-b8b5-13d5dafc68d1.jpg?tr=w-1200,cm-pad_resize" },

    { image: "https://images-static.nykaa.com/uploads/b15d2f8f-f4a8-484b-b8b5-13d5dafc68d1.jpg?tr=w-1200,cm-pad_resize" },

    { image: "https://images-static.nykaa.com/uploads/b15d2f8f-f4a8-484b-b8b5-13d5dafc68d1.jpg?tr=w-1200,cm-pad_resize" },

    { image: "https://images-static.nykaa.com/uploads/b15d2f8f-f4a8-484b-b8b5-13d5dafc68d1.jpg?tr=w-1200,cm-pad_resize" }
  ]

function Womens() {

    const [myData, setmyData] = useState([]);
    const dispatch = useDispatch();
    const Products = useSelector(store => store.data);
    console.log('Products: ', Products);

    useEffect(() => {
        // setmyData(data.womens)
        dispatch(getData())
    }, [])

    const handleChange = (val) => {
        // console.log(val);
        let Change;
        if (val === 'asc') {
            Change = myData.sort((a, b) => (
                a.price - b.price
            ));
        }
        else if (val === 'desc') {
            Change = myData.sort((a, b) => (
                b.price - a.price
            ));
        }
        setmyData([...Change]);
    }


    return (
        <>
        {/* <SimpleSlider slideData={slideData} /> */}
            <Container maxW='container.2xl' mt={10} >
                <Flex w='full' gap='20px' >
                    <Box w='20%' pl='7%' >
                        <Sorting handleChange={handleChange} />
                    </Box>
                    <Box w='80%' >
                        {/* <AllProducts data={myData} /> */}
                        
                         <AllProducts data={Products} />
                    </Box>

                </Flex>
                <Footer/>
            </Container>
        </>
    )
}
export default Womens;