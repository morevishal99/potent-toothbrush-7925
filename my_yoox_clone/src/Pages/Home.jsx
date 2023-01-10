
import SingleDiv from '../Components/SingleDiv';
import SimpleSlider from '../Components/Slider';
import { Grid, Box, Image, Text } from '@chakra-ui/react'
import VariableWidth from '../Components/Slider2';
import Footer from '../Components/Footer';



function Home() {
  const firstGrid = [
    {
      backgroundImage: 'https://www.yoox.com/images/yoox80/banners/6825_1_Hugo_Tris_W.jpg?634485886869569819#width=473&height=660',
      offer: 'Upto 50% Off',
      range: 'On Entire Range'
    },
    {
      backgroundImage: 'https://www.yoox.com/images/yoox80/banners/6825_6_Montblanc_W_Tris.jpg?634485886869569819#width=473&height=660'
      , offer: 'Upto 30% Off',
      range: 'On Entire Range'
    },
    {
      backgroundImage: 'https://www.yoox.com/images/yoox80/banners/6825_5_Furla_W_Tris.jpg?634485886869569819#width=473&height=660',
      offer: 'Upto 20% Off',
      range: '+ Exciting Gifts On Purchase!'
    }
    ,
    {
      backgroundImage: 'https://www.yoox.com/images/items/16/16157930OH_14_f.jpg?impolicy=crop&width=306&height=390',
      offer: 'Affordable Skincare Backed By Science',
      range: 'Shop Bestsellers Starting At Rs.500'
    },
    {
      backgroundImage: 'https://www.yoox.com/images/items/16/16169848HN_14_f.jpg?impolicy=crop&width=306&height=390',
      offer: 'Upto 50% Off + Free Mini Lipstick',
      range: 'Worth Rs. 249 On Rs. 800'
    },
    {
      backgroundImage: 'https://www.yoox.com/images/items/13/13859882NF_14_f.jpg?impolicy=crop&width=306&height=390',
      offer: 'Buy 2 Get Flat 15% Off!',
      range: 'On Entire Range'
    },
    {
      backgroundImage: 'https://www.yoox.com/images/items/47/47318932dn_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center',
      offer: 'Upto 40% Off',
      range: 'Erase Dark Circles Instantly!'
    }
    ,
    {
      backgroundImage: 'https://www.yoox.com/images/items/45/45703170og_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center', offer: 'Upto 20% Off',
      range: '+ Exciting Gifts On Purchase!'
    }
  ]
  const secondGrid = [
    {
      backgroundImage: 'https://images-static.nykaa.com/uploads/48b0e7b8-bff9-44ad-b458-670455d3ee00.jpg?tr=w-600,cm-pad_resize',
      offer: 'Upto 30% Off + Free Sleeping Mask',
      range: 'Worth Rs.175 On Rs.700'
    },
    {
      backgroundImage: 'https://images-static.nykaa.com/uploads/33ca48ba-613a-43e8-bec9-88cf09282e80.jpg?tr=w-600,cm-pad_resize'
      , offer: 'Get Exciting Gifts On Purchase!',
      range: 'Of International Bestsellers'
    },
    {
      backgroundImage: 'https://images-static.nykaa.com/uploads/8b792d21-c756-40ec-864c-236cf1cc3415.jpg?tr=w-600,cm-pad_resize',
      offer: 'Upto 35% Off',
      range: 'Say Goodbye To Skin Tress!'
    }
    ,
    {
      backgroundImage: 'https://images-static.nykaa.com/uploads/e508f06c-a92f-4dd7-be64-040f15222614.jpg?tr=w-600,cm-pad_resize',
      offer: 'Upto 35% Off + Free Sleeping Mask',
      range: 'Worth Rs.175 On Rs.700'
    }]

  const slideData = [

    { image: "https://images-static.nykaa.com/uploads/b15d2f8f-f4a8-484b-b8b5-13d5dafc68d1.jpg?tr=w-1200,cm-pad_resize" },

    { image: "https://images-static.nykaa.com/uploads/b6c778be-a0c6-418b-b2a6-c3062d032b89.gif?tr=w-1200,cm-pad_resize" },

    { image: "https://images-static.nykaa.com/uploads/db2cf3c8-d190-4890-8803-ad0b8549df5c.jpg?tr=w-1200,cm-pad_resize" },

    { image: "https://images-static.nykaa.com/uploads/0cc73a9d-2e31-4a85-b7b8-9ebe254be332.jpg?tr=w-1200,cm-pad_resize" },

    { image: "https://images-static.nykaa.com/uploads/f182b62f-656b-4406-9a7d-4ffae65d2fa6.jpg?tr=w-1200,cm-pad_resize" },

    { image: "https://images-static.nykaa.com/uploads/646688e0-e8a8-484f-8bdf-a9d60d6520b1.jpg?tr=w-1200,cm-pad_resize" }
  ]

  return (
    <>
      <SimpleSlider slideData={slideData} />

      {/* <VariableWidth /> */}

      <Box m={'auto'} mt={8}>
        <Image m={'auto'} w='70%' src='https://images-static.nykaa.com/uploads/2f371d7d-235a-4be5-b852-a5ddf4cd84ea.jpg?tr=w-1200,cm-pad_resize' alt='Dan Abramov' />
      </Box>

      <Grid templateColumns='repeat(2, 1fr)' gap={'50px'} w='70%' m={'auto'} mt={5} mb={20}>
        {firstGrid.map((e) => (<SingleDiv backgroundImage={e.backgroundImage} offer={e.offer} range={e.range} />)
        )
        }
      </Grid>
      <Text fontSize='3xl' textAlign={'center'} >  Only At <span style={{ color: "blue" }}>Y</span> 
      <span style={{ color: "green" }}>O</span>
       <span style={{ color: "yellow" }}>O</span> 
       <span style={{ color: "red" }}>X</span> </Text>

      <Grid templateColumns='repeat(2, 1fr)' gap={'50px'} w='70%' m={'auto'} mt={20} mb={20}>
        {secondGrid.map((e) => (<SingleDiv backgroundImage={e.backgroundImage} offer={e.offer} range={e.range} />)
        )
        }
      </Grid>
      <Box> <Footer/></Box>
     
    </>
  )
}
export default Home;