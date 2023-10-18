import { useCart } from "react-use-cart";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

const Carts = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <section className="py-4 container">
      <div className="row d-flex justify-content-center">
        <div className="col-12">
          <h5>
            {" "}
            Your Cart ({totalUniqueItems}) Total items({totalItems})
          </h5>
          <table className="table t able-light table-hover m-0">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={item.images[2]} style={{ height: "6rem" }} />
                    </td>

                    <td> {item.title} </td>
                    <td> $ {item.price} </td>
                    <td> Quantity ({item.quantity}) </td>
                    <td>
                        <button style={{margin:'5px'}} className="btn btn-info ms-2"
                        onClick={() => updateItemQuantity(item.id, item.quantity -1)}
                        >-</button>
                        <button style={{margin:'5px'}} className="btn btn-info ms-2"
                        onClick={() => updateItemQuantity(item.id, item.quantity +1)}
                        >+</button>
                        <button style={{margin:'5px'}} className="btn btn-danger ms-2"
                        onClick={() => removeItem(item.id)}
                        >Remove Item</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto" >
              <h2 style={{margin:'10px'}}> Total Price: $ {cartTotal} </h2>
        </div>

        <div className="col-auto">
            <button className="btn btn-danger m-2" onClick={emptyCart}>
              Clear Cart
            </button>

           <Link to='/thanks'><button className="btn btn-primary m-2">
              Pay Now
            </button></Link>
        </div>
      </div>
    </section>
  );
};

export default Carts;
