import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const [ignore, tuiter, active] = pathname.split("/"); // eslint-disable-line no-unused-vars
  const { currentUser } = useSelector((state) => state.user);

  const links = [
    { name: "home", icon: "bi bi-house" },
    { name: "explore", icon: "bi bi-compass" },
    { name: "notifications", icon: "bi bi-bell" },
    { name: "messages", icon: "bi bi-chat-dots" },
    { name: "bookmarks", icon: "bi bi-bookmark" },
    { name: "lists", icon: "bi bi-list-ul" },
    { name: "profile", icon: "bi bi-person" },
    { name: "more", icon: "bi bi-three-dots" },
  ];

  return (
    <div className="list-group">
      {links.map((link) => (
        <Link
          to={`/tuiter/${link.name}`}
          className={`list-group-item text-capitalize ${active === link.name ? "active" : ""
            } d-flex justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-start justify-content-xxl-start`}
        >
          <i className={link.icon}></i> {/* Bootstrap Icon */}
          <span className="d-none d-xl-inline ms-2">{link.name}</span> {/* Hidden text for large column size */}
        </Link>
      ))}
      {!currentUser && <Link className="list-group" to="/tuiter/login">   Login   </Link>}
      {!currentUser && <Link className="list-group" to="/tuiter/register">Register</Link>}
      {currentUser && <Link className="list-group" to="/tuiter/profile"> Profile </Link>}
    </div>
  );
};

export default NavigationSidebar;