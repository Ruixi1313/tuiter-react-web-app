import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTwitter, FaHome, FaSearch, FaBell, FaEnvelope, FaBookmark, FaList, FaUser, FaEllipsisH,FaHashtag, FaSignInAlt, FaUserPlus} from 'react-icons/fa';
import { useSelector } from "react-redux";
const NavigationSidebar = () => {
  const { currentUser } = useSelector((state) => state.user);
 const { pathname } = useLocation();
 const [ignore, tuiter, active] = pathname.split("/");
 const links = [
  { name: "home", icon: <FaHome />, text: "Home" },
  { name: "explore", icon: <FaHashtag />, text: "Explore" },
  { name: "notifications", icon: <FaBell />, text: "Notifications" },
  { name: "messages", icon: <FaEnvelope />, text: "Messages" },
  { name: "bookmarks", icon: <FaBookmark />, text: "Bookmarks" },
  { name: "lists", icon: <FaList />, text: "Lists" },
  // { name: "profile", icon: <FaUser />, text: "Profile" },
  // { name: "login", icon: <FaSignInAlt/>, text: "Login" },
  // { name: "register", icon: <FaUserPlus />, text: "Register" },
   { name: "more", icon: <FaEllipsisH />, text: "More" },
];

 return (
  <div className="container pt-1">
  <div className="row">
    <div>
      <div className="list-group">
        <div className="fa-1x text-black list-group-item list-group-item-action">
          <FaTwitter />
        </div>
     {links.map((link) => (
          <Link
          key={link.name}
          to={`/tuiter/${link.name}`}
          className={`list-group-item d-flex align-items-center text-capitalize  ${
            active === link.name ? "active" : ""
          }`}
        >
          <div className="me-2">{link.icon}</div>
          <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline text-wrap">{link.text}</span>
        </Link>
      ))}
      {!currentUser && 
      <Link 
        key="login"
        className={`list-group-item d-flex align-items-center text-capitalize  ${
          active === "login" ? "active" : ""
        }`} 
        to="/tuiter/login">  
        <div className="me-2"><FaSignInAlt/></div>
          <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline text-wrap">Login</span>
        
      </Link>}
     {!currentUser && 
     <Link 
        key="register"
        className={`list-group-item d-flex align-items-center text-capitalize  ${
          active === "register" ? "active" : ""
        }`} 
        to="/tuiter/register">
        <div className="me-2"><FaUserPlus /></div>
        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline text-wrap">Register</span>
      </Link>}
     { currentUser && 
     <Link 
        key="profile"
        className={`list-group-item d-flex align-items-center text-capitalize  ${
          active === "profile" ? "active" : ""
        }`}  
        to="/tuiter/profile"> 
        <div className="me-2"><FaUser /></div>
        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline text-wrap">Profile</span>
        
      </Link>}

      </div>
                <button className="btn btn-primary w-100 mt-1 rounded-pill col-lg-5">
                    Tuit
                </button>
                </div>
        {/* Fist column done */}
      </div>
    </div>
 );
};
export default NavigationSidebar;