/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable quotes */
// eslint-disable-next-line quotes
import PropTypes from "prop-types";

const ItemType = PropTypes.shape({
  itemId: PropTypes.string.isRequired,
  imageId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  salePrice: PropTypes.number,
});
export default ItemType;
