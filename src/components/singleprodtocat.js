import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaShoppingCart } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { CartProvider, useCart } from "react-use-cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductsTemp = ({ prodtocat }) => {
  const { addItem } = useCart();

  const notify = () => toast("Added to cart!");

  return (
    <div className="BigP">

<ToastContainer />

      {prodtocat.map((products, index) => {
        return (
          <div key={index}>
            
            <div class="card" style={{height:'600px'}}>
              <Link to="/categories"> <button className="back-home"> <BiArrowBack /> </button> </Link>
              <div class="card-img">
                <div class="img">
                  <LazyLoadImage
                   effect="blur"
                    alt={`Image not loaded`}
                    height={150}
                    src={products.images[2]} // use normal <img> attributes as props
                    width={150}
                  />
                </div>
              </div>

              <div class="card-title">{products.title}</div>
              <div class="card-subtitle">
              <p> {products.description} </p>
              <p className="discount"> {products.discountPercentage}% OFF!</p>
              <p> Rated {products.rating} </p>
              <p> {products.stock} Left </p>
              <p> Brand: {products.brand} </p>
              </div>

              <hr class="card-divider" />
              <div class="card-footer">
                <div class="card-price">
                  <span>$</span> {products.price}
                </div>
                <div>
                {/* <Link to={`/products/${products.id}`}> <button className="card-btn" title="See more!"> <FaShoppingCart/> </button> </Link> */}
                <button className="card-btn" title="See more!" onClick={() => {addItem(products); notify()} }> Add to cart <FaShoppingCart/> </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsTemp;
