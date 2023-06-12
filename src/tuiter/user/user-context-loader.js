import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { profileThunk} from "../services/auth-thunks";
function UsersContextLoader({children}) {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchProfile = async() => {
            const { payload } = dispatch(profileThunk());
        }
        fetchProfile();
        return() => {
    
        };
    },[]);
    return children;
}
export default UsersContextLoader;