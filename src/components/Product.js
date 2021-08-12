import { useContext } from "react";
import CartContext from "./CartContext";
import "./Product.css";

const Product = ({ id, title, price, description, category, image }) => {
  //Utiliser {} car productsCart es un array
  const { productsCart } = useContext(CartContext);
  const { setProductsCart } = useContext(CartContext);

  //Quand on ajoute un produit au panier
  const addToCart = (id, title, price, image) => {
    let productInCart = true;

    productsCart.map((product) => {
      product.id === id
        ? (productInCart = false)
        : (productInCart = true & productInCart);
    });

    //Si le produit existe deja dans le panier
    if (productInCart === false) {
      setProductsCart(
        productsCart.map((item) =>
          item.id === id
            ? (item = {
                ...item,
                amount: item.amount + 1,
              })
            : item
        )
      );
    }

    //Nouveau produit
    else {
      setProductsCart([
        {
          id: id,
          title: title,
          price: price,
          image: image,
          amount: 1,
        },
        ...productsCart,
      ]);
   
    }

    //console.log(productsCart);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} />
      </div>
      <div className="product-info">
        <h5>
          {title}
          <br />
          {price}
        </h5>
        <h6>
          {description}
          <br />
          {category}
        </h6>
        <button onClick={() => addToCart(id, title, price, image)}>Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
