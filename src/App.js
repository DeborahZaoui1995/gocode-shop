import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import CartContext from "./components/CartContext";
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import ProductsContext from "./components/ProductsContext";

const groupBy = (xs, key) =>
  xs.reduce((rv, x) => {
    rv[x[key]] = true || [];
    return rv;
  }, {});

function App() {
  const [productsArr, setProductsArr] = useState([]);
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  const [categories, setCategories] = useState([]);
  //le array qui contient les produits du panier
  const [productsCart, setProductsCart] = useState([]);
  //const [color, setColor] = useState("blue");

  useEffect(() => {
    setLoader(true);

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setProductsArr(json);
        setCategories(["All", ...Object.keys(groupBy(json, "category"))]);
        setLoader(false);
      });
  }, []);

  //Affiche seulement les produits qui ont la categorie selectionee
  const onChange = (event) => {
    if (event.target.value === "All") setProducts(productsArr);
    else
      setProducts(
        productsArr.filter((product) => product.category === event.target.value)
      );
  };

  return (
    <div className="App">
      <header className="App-header">
        <CartContext.Provider value={{ productsCart, setProductsCart }}>
          {/* {loader  && <Loader/>}
          <Header categories={categories} onChange={onChange} />
          <Products products={products} /> */}
          <ProductsContext.Provider value={{ products, setProducts, productsArr }}>
            <ResponsiveDrawer
              loader={loader}
              categories={categories}
              onChange={onChange}
              products={products}
            />
          </ProductsContext.Provider>
        </CartContext.Provider>
      </header>
    </div>
  );
}

export default App;
