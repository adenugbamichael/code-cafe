/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable quotes */
// eslint-disable-next-line quotes
import "./Home.scss";
import PropTypes from "prop-types";
import Thumbnail from "./Thumbnail";
import { itemImages } from "../items";
import ItemType from "../types/item";

function Home({ items }) {
  return (
    <div className="home-component">
      {items.map((item) => (
        <Thumbnail
          key={item.itemId}
          itemId={item.itemId}
          image={itemImages[item.imageId]}
          title={item.title}
        />
      ))}
    </div>
  );
}

Home.propTypes = {
  items: PropTypes.arrayOf(ItemType).isRequired,
};

export default Home;
