import { useQuery } from "@tanstack/react-query";
import CatsTemp from "./categoriestemp";
import { InfinitySpin } from "react-loader-spinner";


const api = "https://dummyjson.com/products/categories";

const Categories = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetch(api).then((res) => res.json()),
  });



  if (isLoading)
    return (
      <div className="loader">
        {" "}
        <InfinitySpin width="200" color="black" />
      </div>
    );

  if (error) return "An error has occurred: " + error.message;

  return  (

  <div>
     {<CatsTemp CatsTemp={data} />} 
  </div>
  )
};

export default Categories;
