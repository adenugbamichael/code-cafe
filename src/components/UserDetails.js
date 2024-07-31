/* eslint-disable react/no-unescaped-entities */
/* eslint-disable indent */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable quotes */

import axios from "axios";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CurrentUserContext from "../contexts/CurrentUserContext";
import Profile from "../images/profile.svg";
import "./UserDetails.scss";

function UserDetails() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const logout = async () => {
    try {
      await axios.post("/api/auth/logout", {});
      setCurrentUser({});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="user-details-component">
      {currentUser.username ? (
        <div>
          {currentUser.access === "associate" ? (
            <Link to="/orders">Orders</Link>
          ) : null}
          <img src={Profile} alt="profile" />
          <p>{currentUser.username}</p>
          <button type="button" onClick={logout}>
            Log Out
          </button>
        </div>
      ) : (
        <Link to="/login">Log In</Link>
      )}
    </div>
  );
}

export default UserDetails;
