/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable quotes */
/* eslint-disable react/jsx-one-expression-per-line */

import { Link } from "react-router-dom";
import "./NotFound.scss";

function NotFound() {
  return (
    <div className="not-found-component">
      <h2>Page Not Found</h2>
      <Link to="/">Return Home</Link>
    </div>
  );
}
export default NotFound;
