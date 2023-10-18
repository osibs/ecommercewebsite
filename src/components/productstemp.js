import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductsTemp = ({ prod }) => {
  return (
    <div className="BigP">
      {prod.map((products, index) => {
        return (
          <div key={index}>
            
            <div class="card" style={{height:'450px'}}>
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
              {products.description}
              </div>

              <hr class="card-divider" />
              <div class="card-footer">
                <div class="card-price">
                  <span>$</span> {products.price}
                </div>
                <div>
                <Link to={`/products/${products.id}`}> <button className="card-btn"> See more! </button> </Link>
                {/* <FaShoppingCart/> */}
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
