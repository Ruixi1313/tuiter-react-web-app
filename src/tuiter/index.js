import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./users/profile";
import WhoToFollowList from "./who-to-follow-list";
import ExploreScreen from "./explore-screen/";
import whoReducer from "./reducers/who-reducer";
import HomeScreen from "./home-screen";
import { configureStore } from '@reduxjs/toolkit';
import tuitsReducer from "./reducers/tuits-reducer";
import {Provider} from "react-redux";
import LoginScreen from "./users/login";
import RegisterScreen from "./users/register";
import authReducer from "./reducers/auth-reducer";
import UsersContextLoader from "./users/users-context-loader";
import ProtectedRoute from "./users/protected-route";
const store = configureStore(
  {reducer: {who: whoReducer ,
             tuits: tuitsReducer,
             user:  authReducer}});



function Tuiter() {
 return (
  <Provider store={store}>
    <UsersContextLoader>
   <div>
     <Nav />
     <div className="row">
       <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
         <NavigationSidebar />
       </div>
       <div className="col-6 col-sm-8 col-md-10 col-lg-6 col-xl-6 col-xxl-6">
       <Routes>
         <Route path="/home" element={<HomeScreen/>} />
         <Route path="/explore" element={<ExploreScreen/>} />
         <Route path="/bookmarks" element={<BookmarksScreen />} />
         <Route path="/login"    element={<LoginScreen    />} />
          <Route path="/register" element={<RegisterScreen />} /> 

         <Route path="/profile" element={
          <ProtectedRoute>
            <ProfileScreen />
            </ProtectedRoute>
         } />
      </Routes>

       </div>
       <div className="col-4 d-none d-sm-none d-md-none d-lg-inline d-xl-inline d-xxl-inline">
         <WhoToFollowList/>
       </div>
     </div>
   </div>
   </UsersContextLoader>
   </Provider>
 );
}
export default Tuiter;