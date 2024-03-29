import './Navbar.css'
import { Center, Container, Text, Box, Image } from '@chakra-ui/react'
function SingleDiv({ backgroundImage, offer, range }) {
    return (
        <div>
            <div>
                <Container pos="relative" maxW='2xl' boxShadow='rgba(0, 0, 0, 0.16) 0px 1px 4px' >
                    <Image  src={backgroundImage} alt='{backgroundImage}' />
                    <Center bg='white' color='black' w='70%' pos="absolute" top="76.3%" left="15%" right='10%'>
                        <Box p={4}>
                            <Text>{offer}</Text>
                            <Text>{range}</Text>
                        </Box>
                    </Center>
                </Container>
            </div>
        </div>

    )
}
export default SingleDiv;