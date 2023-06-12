import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const NavigationSidebar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { pathname } = useLocation();
  const [, , active] = pathname.split("/");
  const links = ["home", "explore", "notifications", "messages", "bookmarks", "lists", "more"];
  const icons = [
    "bi bi-house-door-fill",
    "bi bi-hash",
    "bi bi-bell",
    "bi bi-envelope",
    "bi bi-bookmark",
    "bi bi-card-list",
   
    "bi bi-three-dots",
  ];

  return (
    <div className="list-group">
      {links.map((link, index) => (
        <Link
          key={link}
          className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}
          to={`/tuiter/${link}`}
        >
          <i className={`${icons[index]} pe-2`} aria-hidden="true"></i>
          <span className="d-none d-xl-inline">{link}</span>
        </Link>
      ))}
      {!currentUser && (
        <Link className={`list-group-item text-capitalize ${active === "login" ? "active" : ""}`} to="/tuiter/login">
          <i className="bi bi-box-arrow-in-right pe-2"></i>
          <span className="d-none d-xl-inline">login</span>
        </Link>
      )}
      {!currentUser && (
        <Link className={`list-group-item text-capitalize ${active === "register" ? "active" : ""}`} to="/tuiter/register">
          <i className="bi bi-person-plus pe-2"></i>
          <span className="d-none d-xl-inline">register</span>
        </Link>
      )}
      {currentUser && (
        <Link className={`list-group-item text-capitalize ${active === "profile" ? "active" : ""}`} to="/tuiter/profile">
          <i className="bi bi-person pe-2"></i>
          <span className="d-none d-xl-inline">profile</span>
        </Link>
      )}
     
    </div>
  );
};

export default NavigationSidebar;