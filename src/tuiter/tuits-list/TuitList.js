import React, {useEffect} from "react";
import TuitItem from "./TuitItem";
import {useSelector, useDispatch } from "react-redux";
import {findTuitsThunk} from "../services/tuits-thunk";
const TuitList = () => {
    const{tuits, loading} = useSelector(state => state.tuits)
    const dispatch = useDispatch();
    useEffect(() => {dispatch(findTuitsThunk())},[dispatch])
    return (
        <ul className="list-group">
            { loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {tuits.map(tuit => <TuitItem key={tuit._id} tuit={tuit} />)}
        </ul>
    );
};
export default TuitList;