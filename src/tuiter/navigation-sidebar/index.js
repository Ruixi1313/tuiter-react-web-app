import React from "react";
import { FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaList, FaUser, FaEllipsisH } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const NavigationSidebar = () => {
    const { currentUser } = useSelector((state) => state.user);
    const { pathname } = useLocation();
    const [, , active] = pathname.split("/");
    const links = [
        { name: "home", icon: FaHome },
        { name: "explore", icon: FaHashtag },
        { name: "notifications", icon: FaBell },
        { name: "messages", icon: FaEnvelope },
        { name: "bookmarks", icon: FaBookmark },
        { name: "lists", icon: FaList },
        { name: "profile", icon: FaUser },
        { name: "more", icon: FaEllipsisH },
    ];

    return (
        <div className="list-group">
            {links.map((link, index) => {
                if (link.name === "profile" && currentUser) {
                    return (
                        <Link key={index} to="/tuiter/profile" className={`list-group-item text-capitalize ${active === link.name ? "active" : ""}`}>
                            <span style={{ display: "flex", alignItems: "center" }}>
                                {React.createElement(link.icon, { className: "me-2" })}
                                <span className="d-none d-xxl-block d-xl-block ">{link.name}</span>
                            </span>
                        </Link>
                    );
                } else {
                    return (
                        <Link
                            key={index}
                            to={`/tuiter/${link.name}`}
                            className={`list-group-item text-capitalize ${active === link.name ? "active" : ""}`}>
                            <span style={{ display: "flex", alignItems: "center" }}>
                                {React.createElement(link.icon, { className: "me-2" })}
                                <span className="d-none d-xxl-block d-xl-block ">{link.name}</span>
                            </span>
                        </Link>
                    );
                }
            })}
            {!currentUser && <Link className="list-group-item" to="/tuiter/login">Login</Link>}
            {!currentUser && <Link className="list-group-item" to="/tuiter/register">Register</Link>}
        </div>
    );
};
export default NavigationSidebar;