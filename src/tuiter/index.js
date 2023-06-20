import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen/home-screen";
import ExploreScreen from "./explore-screen/explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import WhoToFollowListItem from "./who-to-follow-list/index";
import whoReducer from "./reducers/who-reducer";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import tuitsReducer from "./reducers/tuits-reducer";
import ProfileScreen from "./user/profile-screen";
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register-screen";
import authReducer from "./reducers/auth-reducer";
import ProtectedRoute from "./user/protected-route";
import AuthContext from "./services/auth-context";

const store = configureStore({
    reducer: { who: whoReducer, tuits: tuitsReducer, user: authReducer }
});

function Tuiter() {
    return (
        <Provider store={store}>
            <div>
                <Nav />
                <div className="row">
                    <div className="col-2">
                        <NavigationSidebar />
                    </div>
                    <div className="col-lg-7 col-md-9 col-sm-10 col">
                    <AuthContext>
                        <Routes>
                            <Route path="/home" element={<HomeScreen />} />
                            <Route path="/explore" element={<ExploreScreen />} />
                            <Route path="/notifications" element={<h1>Notifications</h1>} />
                            <Route path="/messages" element={<h1>Messages</h1>} />
                            <Route path="/bookmarks" element={<BookmarksScreen />} />
                            <Route path="/lists" element={<h1>Lists</h1>} />
                            <Route path="/profile" element={<ProtectedRoute><ProfileScreen /></ProtectedRoute>} />
                            <Route path="/more" element={<h1>More</h1>} />
                            <Route path="/login" element={<LoginScreen />} />
                            <Route path="/register" element={<RegisterScreen />} />
                        </Routes>
                        </AuthContext>
                    </div>
                    <div className="col-3 d-none d-lg-block d-xl-block d-xxl-block">
                        <WhoToFollowListItem />
                    </div>
                </div>
            </div>
        </Provider>
    )
}
export default Tuiter;