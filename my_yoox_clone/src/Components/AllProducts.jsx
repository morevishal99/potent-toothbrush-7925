import SingleProduct from "./SingleProduct";
import { Grid } from '@chakra-ui/react';
// import Footer from "./Footer";
function AllProducts({ data }) {
    const breakpoints = {
        sm: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)',
        xl: 'repeat(3, 1fr)',
    }
    return (
        <div>
            <Grid w='90%' m={'auto'} templateColumns={breakpoints} gap={30}>
                {data.map((e) => (
                    <SingleProduct
                        key={e.id}
                        id={e.id}
                        category={e.category}
                        feautured={e.feautured}
                        bestSeller={e.bestSeller}
                        image={e.images}
                        name={e.name}
                        offer={e.offer}
                        mrp={e.mrp}
                        price={e.price}
                        off={e.off}
                        rating={e.rating}
                    />
                ))
                }
            </Grid>

        </div>

    )
}
export default AllProducts;


