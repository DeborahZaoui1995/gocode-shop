import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import ProductsContext from "./ProductsContext";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 50]);

  const { productsArr } = useContext(ProductsContext);
  const { setProducts } = useContext(ProductsContext);

  const handleChange = (event, newValue) => {
    setProducts(productsArr.filter((product) => product.price <= newValue[1]));
    setValue(newValue);
  };



  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Filter by price
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}
