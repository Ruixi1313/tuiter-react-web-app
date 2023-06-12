import React from "react";
import {FaHeart, FaRegHeart, FaRetweet, FaUpload, FaRegComment} from "react-icons/fa";
import {updateTuitThunk} from "../services/tuits-thunks";
import {useDispatch} from "react-redux";
import * as PropTypes from "prop-types";
import {AiFillDislike, AiOutlineDislike} from "react-icons/ai";

function BiSolidDislike(props) {
    return null;
}

BiSolidDislike.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string
};
const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();


    return (
        <div className="row">
            <div className="col-2">
                <div><FaRegComment/> {tuit.replies}</div>
            </div>
            <div className="col-2">
                <div><FaRetweet/> {tuit.retuits}</div>
            </div>
            <div className="col-3">
                {/*Todo: Try to make this block prettier*/}
                <div>
                    {tuit.liked ? <FaHeart className="red-heart" onClick={() =>
                        dispatch(updateTuitThunk({...tuit, likes: tuit.likes + 1}))
                    }/> : <FaRegHeart onClick={() =>
                        dispatch(updateTuitThunk({...tuit, likes: tuit.likes + 1, liked: true}))
                    }/>} {tuit.likes}
                </div>
            </div>
            <div className="col-3">
                {/*Todo: Try to make this block prettier*/}
                <div>
                    {tuit.disliked ? <AiFillDislike className="thumbs-down" onClick={() =>
                        dispatch(updateTuitThunk({...tuit, dislikes: tuit.dislikes + 1}))
                    }/> : <AiOutlineDislike onClick={() =>
                        dispatch(updateTuitThunk({...tuit, dislikes: tuit.dislikes + 1, disliked: true}))
                    }/>} {tuit.dislikes}
                </div>
            </div>
            <div className="col-2">
                <div><FaUpload/></div>
            </div>
        </div>
    );
}
export default TuitStats;