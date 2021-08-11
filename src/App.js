import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";


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

  useEffect(() => {
    setLoader(true);

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setProductsArr(json);
        setCategories(["All", ... Object.keys(groupBy(json, "category"))]);
        setLoader(false);
      });
  }, []);
 

  //Affiche seulement les produits qui ont la categorie selectionee
  const onChange = (event) => {
    if (event.target.value === "All") setProducts(productsArr);
    else
      setProducts(productsArr.filter((product) => product.category === event.target.value));
  };


  return (
    <div className="App">
        <header className="App-header">
          {loader  && <Loader/>}
          <Header categories={categories} onChange={onChange} />
          <Products products={products} />
        </header>
    </div>
  );
}

export default App;
