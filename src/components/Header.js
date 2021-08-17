import { Slider } from "@material-ui/core";
import "./Header.css";
import RangeSlider from "./RangeSlider";
import ResponsiveDrawer from "./ResponsiveDrawer";

const Header = ({ categories, onChange }) => {
  return (
    <nav class="product-filter">
      <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>
          <select onChange={onChange}>
            {categories.map((category) => (
              <option value={category}>{category}</option>
            ))}
          </select>
        </div>

       
      </div>
    </nav>
  );
};

export default Header;
