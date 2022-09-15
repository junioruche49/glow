const ProductItem = ({ name, price, image }) => {
  return (
    <div className="row">
      <div className="productImage">
        <img src={image} alt="productImage" />
        <h6>{name}</h6>
        <div className="para-2">{price}</div>
      </div>
    </div>
  );
};

export default ProductItem;
