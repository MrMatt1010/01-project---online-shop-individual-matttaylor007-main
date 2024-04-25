import "./Products";
// GitHub has named this file product.js not Product.js
const Product = ({ image, name, description, price, priceId, onCheckout }) => {
  const onClick = () => {};
  return (
    <li className="product-grid-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
      <button onClick={onCheckout}>Buy now</button>
    </li>
  );
};

export default Product;
