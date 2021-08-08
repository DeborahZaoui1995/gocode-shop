import './Products.css';
import Product from "./Product";

const Products = ({products}) => {
    return (
      <section className="products">

  {
    products.map( (product) => 
      <Product key={product.id} image={product.image}  title={product.title} price={product.price} description={product.description} category={product.category}  />
    )
  }

      </section>
    );
  };

  export default Products;


  