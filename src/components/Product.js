import './Product.css';


const Product = ({ title, price, description, category, image}) => {
    return (
      <div className="product-card">
        <div className="product-image">
          <img src={image} />
        </div>
        <div className="product-info">
          <h5>
              {title}
              <br/>
              {price}
          </h5>
          <h6>
              {description}
              <br/>
              {category}
          </h6>
        </div>
      </div>
    );
  };

  

export default Product;