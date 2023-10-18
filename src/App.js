import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navlinks from "./components/navlinks";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./components/products";
import Categories from "./components/categories";
import Categoriespage, {loadingCats} from './components/categoriespage';
import Myaccount from "./components/myaccount";
import Singleproductspage, { loadingproducts } from './components/singleproductspage';
import Aboutme from "./components/aboutme";
import Carts from "./components/carts";
import Thanks from "./components/thanks";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navlinks />,
    children: [
      {
        index:true,
        element: <Aboutme/>
      },
      {
        path:"/categories",
        element: <Categories />
      },
      {
        path:"/myaccount",
        element: <Myaccount />
      },
      {
        path:"/products",
        element: <Products />
      },
      {
        path:"/mycart",
        element: <Carts />
      },
      {
        path:"/thanks",
        element: <Thanks />
      },
      {
        path: "/products/:id",
        element: <Singleproductspage />,
        loader: loadingproducts
    
      },
      {
        path: "/products/categories/:item",
        element: <Categoriespage />,
        loader: loadingCats
      }
   
    ]
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
