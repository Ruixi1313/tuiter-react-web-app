import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk }
    from "../services/auth-thunks";

function ProfileScreen() {
    const { currentUser } = useSelector((state) => state.user);
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const save = () => { console.log(profile); dispatch(updateUserThunk(profile)); };
    useEffect(() => {
        const getProfile = async () => {
            const { payload } = await dispatch(profileThunk());
            setProfile(payload);
        };
        getProfile();
    }, [dispatch]);
    console.log("profile1", profile);
    return (
        <div>
            <h1>Profile Screen</h1>
            
            {profile && (<div>
                <div className="mt-2 ">
                    <label>First Name &nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input class="form-control" type="text" value={profile.firstName}
                        onChange={(event) => {
                            const newProfile = {
                                ...profile, firstName: event.target.value,
                            };
                            setProfile(newProfile);
                        }} />
                </div>
                <div className="mt-2">
                    <label>Last Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input class="form-control" type="text" value={profile.lastName}
                        onChange={(event) => {
                            const newProfile = {
                                ...profile, lastName: event.target.value,
                            };
                            setProfile(newProfile);
                            console.log(newProfile);
                        }} />
                </div></div>
            )}
            <button className="btn btn-primary btn-danger mt-2"
                onClick={() => {
                    dispatch(logoutThunk());
                    navigate("/tuiter/login");
                }}>                   Logout</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-primary mt-2" onClick={save}>Save  </button>
        </div>);
}
export default ProfileScreen;