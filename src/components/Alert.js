/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable quotes */
import PropTypes from "prop-types";
import "./Alert.scss";

const BACKGROUND_COLORS = {
  success: "#adc6a8",
  error: "#f5c6cb",
};

function Alert({ children, visible, type }) {
  return (
    <div
      className={`alert-component ${visible && "visible"}`}
      role="alert"
      hidden={!visible}
      style={{ backgroundColor: BACKGROUND_COLORS[type] }}
    >
      {children}{" "}
    </div>
  );
}

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(["success", "error"]).isRequired,
};

export default Alert;
