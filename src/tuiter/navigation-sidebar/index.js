import React from "react";
import {Link, useLocation} from "react-router-dom";
import {FaHome, FaCompass, FaBell, FaEnvelope, FaBookmark, FaList, FaUser, FaEllipsisH} from "react-icons/fa";
import {useSelector} from "react-redux";
import {BiRegistered} from "react-icons/bi";
import {LuLogIn} from "react-icons/lu";

const NavigationSidebar = () => {
    const {currentUser} = useSelector((state) => state.user);
    const {pathname} = useLocation();
    const [ignore, tuiter, active] = pathname.split("/");

    const links = [
        {name: "home", icon: <FaHome/>},
        {name: "explore", icon: <FaCompass/>},
        {name: "notifications", icon: <FaBell/>},
        {name: "messages", icon: <FaEnvelope/>},
        {name: "bookmarks", icon: <FaBookmark/>},
        {name: "lists", icon: <FaList/>},
    ];

    return (
        <div className="list-group">
            {links.map(({name, icon}) =>
                <Link to={`/tuiter/${name}`}
                      className={`list-group-item text-capitalize ${active === name ? "active" : ""}`}
                      key={name}>
                    <div>
                        <span style={{marginRight: "7px"}}>{icon}</span>
                        <span className="d-none d-xl-inline">{name}</span></div>
                </Link>
            )}
            {
                currentUser && <Link to={`/tuiter/profile`}
                                     className={`list-group-item text-capitalize ${active === "profile" ? "active" : ""}`}
                                     key={"Profile"}>
                    <div>
                        <span style={{marginRight: "7px"}}>{<FaUser/>}</span>
                        <span className="d-none d-xl-inline">Profile</span></div>
                </Link>
            }
            {<Link to={`/tuiter/more`}
                   className={`list-group-item text-capitalize ${active === "more" ? "active" : ""}`}
                   key={"More"}>
                <div>
                    <span style={{marginRight: "7px"}}>{<FaEllipsisH/>}</span>
                    <span className="d-none d-xl-inline">More</span></div>
            </Link>
            }

            {!currentUser && <Link to={`/tuiter/login`}
                                   className={`list-group-item text-capitalize ${active === "login" ? "active" : ""}`}
                                   key={"Login"}>
                <div>
                    <span style={{marginRight: "7px"}}>{<LuLogIn/>}</span>
                    <span className="d-none d-xl-inline">Login</span></div>
            </Link>
            }
            {!currentUser && <Link to={`/tuiter/register`}
                                   className={`list-group-item text-capitalize ${active === "register" ? "active" : ""}`}
                                   key={"Register"}>
                <div>
                    <span style={{marginRight: "7px"}}>{<BiRegistered/>}</span>
                    <span className="d-none d-xl-inline">Register</span></div>
            </Link>
            }


            <p className="text-center text-white rounded " style={{backgroundColor: 'lightgreen'}}>Tuit</p>

        </div>
    );
};

export default NavigationSidebar;
 