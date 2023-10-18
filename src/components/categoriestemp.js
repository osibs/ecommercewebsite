import { Link } from "react-router-dom";

const CatsTemp = ({ CatsTemp }) => {
  return (
    <div className="bigcat">
      {CatsTemp.map((data, index) => {
        return (
          <div  key={index}>
            <Link to={`/products/categories/${data}`}><button className="catbtn">{data}</button> </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CatsTemp;
