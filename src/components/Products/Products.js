import { Fragment } from "react";
import ProductItem from "./ProductItem";
import nextButton from "../../assets/img/next-button-1.png";
import product1 from "../../assets/img/product-1.png";
import Fade from "react-reveal/Fade";

const Products = () => {
  const products = [
    {
      image: product1,
      name: "Shower Butter",
      price: "$190.00",
    },
    {
      image: product1,
      name: "Luxury Oil Gel",
      price: "$190.00",
    },
    {
      image: product1,
      name: "Baby Oil",
      price: "$190.00",
    },
    {
      image: product1,
      name: "Sunshine Shampoo",
      price: "$190.00",
    },
    {
      image: product1,
      name: "Luxury Oil Gel",
      price: "$190.00",
    },
  ];
  return (
    <Fragment>
      <div className="row mt-7">
        <Fade bottom>
          <div className="col-4">
            <h2 className="h-4">
              Trending on <span> Essentials</span>
            </h2>
            <p className="para-3">
              Made with nature's best ingredients - our product's transparent
              ingredient
            </p>
            <br />
            <button className="btn btn-lg btn-3 pl-4 pr-4 pt-3 pb-3">
              Browse All Products <img src={nextButton} className="ml-1" />
            </button>
          </div>
        </Fade>
        <Fade right>
          {products.map((data) => (
            <div className="col-4">
              <ProductItem {...data} />
            </div>
          ))}
        </Fade>
        {/* <div className="col-4">
          <ProductItem />
        </div> */}
      </div>
      {/* <div className="row">
        <div className="col-4">
          <ProductItem />
        </div>
        <div className="col-4">
          <ProductItem />
        </div>
        <div className="col-4">
          <ProductItem />
        </div>
      </div> */}
    </Fragment>
  );
};

export default Products;
