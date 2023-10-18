import { useLoaderData, useParams } from "react-router-dom";
import SingleCats from "./singlecategories";

const Categoriespage = () => {

    const {item} = useParams()
    const productCat = item;
    const Singlecategories = useLoaderData()

    return ( 
        <div>
            <SingleCats cats = { Singlecategories } />
        </div>
     );
}

export async function loadingCats({params}) {
    const item = params.item;
    const response = await fetch (`https://dummyjson.com/products/category/${item}`)
    if (!response.ok) {

    }
    const data = await response.json()
    // console.log(data.products);
    const mydATA =[]
    mydATA.push(data.products)
    return mydATA
 }
 
export default Categoriespage;