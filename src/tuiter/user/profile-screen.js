import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { profileThunk, logoutThunk, updateUserThunk } from "../services/auth-thunks";

function ProfileScreen() {
    const { currentUser } = useSelector((state) => state.user);
    console.log("currentUser", currentUser)
    const [profile, setProfile] = useState(currentUser);
    console.log("profile", profile)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const save = () => {
        dispatch(updateUserThunk(profile));
    };

    useEffect(() => {
        const getProfile = async () => {
            const { payload } = await dispatch(profileThunk());
            setProfile(payload);
        };
        getProfile();
    }, [dispatch]);

    useEffect(() => {
        setProfile(currentUser);
    }, [currentUser]);

    return (
        <div>
            <h1>Profile Screen</h1>
            {profile && (
                <div>
                    <div className="mt-2">
                        <label>First Name</label>
                        <input
                            className="w-75" style={{ margin: '5px 10px' }}
                            type="text"
                            value={profile.firstName}
                            onChange={(event) => {
                                const newProfile = { ...profile, firstName: event.target.value };
                                setProfile(newProfile);
                            }}
                        />
                    </div>
                    <div className="mt-2">
                        <label>Last Name</label>
                        <input className="w-75" style={{ margin: '5px 10px' }} type="text" value={profile.lastName}
                            onChange={(event) => {
                                const newProfile = { ...profile, lastName: event.target.value };
                                setProfile(newProfile);
                            }}
                        />
                    </div>
                </div>
            )}
            <div className="mt-2">
                <button className="w-30 float-start" style={{ margin: '6px 130px' }}onClick={() => { dispatch(logoutThunk()); navigate("/tuiter/login"); }}>Logout
                </button>
                <button className="w-30 float-start" style={{ margin: '6px 130px' }} onClick={save}>Save</button>
            </div>

        </div>
    );
}

export default ProfileScreen;