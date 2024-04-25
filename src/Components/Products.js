import Product from "./Product";
import { checkout } from "../services/checkout.js";
// ,
//
const Products = ({ products }) => {
  return (
    <ul className="product-grid">
      {products.map((product) => {
        const price = product.prices[0].unit_amount / 100;
        const priceId = product.prices[0].id;
        return (
          <Product
            key={product.id}
            image={product.images[0]}
            name={product.name}
            description={product.description}
            price={price}
            onCheckout={() => checkout(priceId)}
          />
        );
      })}
    </ul>
  );
};

export default Products;
