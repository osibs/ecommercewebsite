import { LazyLoadImage } from "react-lazy-load-image-component";
import ProductsTemp from "./productstemp";
import Singleproduct from "./singleprodtocat";

const SingleCats = ({cats}) => {

    const categories = cats[0];

    return ( 
        <div className="bigproduct">
           <Singleproduct prodtocat={categories} />
        </div>
     );
}
 
export default SingleCats;