import {Routes, Route} from "react-router";
import Nav from "./nav";
import NavigationSidebar from "./tuiter/navigation-sidebar";
import HomeScreen from "./tuiter/home-screen/home-screen";
import ExploreScreen from "./tuiter/explore-screen/explore-screen";
import BookmarksScreen from "./tuiter/bookmarks-screen";
import ProfileScreen from "./tuiter/user/profile-screen";
import WhoToFollowList from "./tuiter/who-to-follow-list";
import {Navigate} from "react-router-dom";
import whoReducer from "./tuiter/reducers/who-reducer";
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import tuitsReducer from "./tuiter/reducers/tuits-reducer";
import LoginScreen from "./tuiter/user/login-screen";
import RegisterScreen from "./tuiter/user/register-screen";
import authReducer from "./tuiter/reducers/auth-reducer";

const store = configureStore({
    reducer: {
        who: whoReducer,
        tuits: tuitsReducer,
        user: authReducer
    }
});

function Tuiter() {
    return (
        <Provider store={store}>

            <div>
                <Nav/>
                <div className="row">
                    <div className="col-3 col-lg-2">
                        <NavigationSidebar/>
                    </div>
                    <div className="col-9 col-lg-7">

                        <Routes>
                            <Route path="/" element={<Navigate to="/tuiter/home"/>}/>
                            <Route path="/home" element={<HomeScreen/>}/>
                            <Route path="/explore" element={<ExploreScreen/>}/>
                            <Route path="/bookmarks" element={<BookmarksScreen/>}/>
                            <Route path="/login" element={<LoginScreen/>}/>
                            <Route path="/register" element={<RegisterScreen/>}/>
                            <Route path="/profile" element={<ProfileScreen/>}/>
                        </Routes>

                    </div>
                    <div className="col-0 col-lg-3">
                        <WhoToFollowList/>
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default Tuiter;
