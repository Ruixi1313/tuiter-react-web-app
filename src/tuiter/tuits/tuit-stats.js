import React, { useState } from "react";
import { FaComment, FaRetweet, FaHeart, FaUpload, FaThumbsDown} from 'react-icons/fa';
import {useDispatch} from "react-redux";
import { likeButton, dislikeButton } from "../reducers/tuits-reducer";
import { updateTuitThunk } from "../services/tuits-thunks";

const TuitsStat = ( {tuit} ) => {
   
    const dispatch = useDispatch();
    
    const handleLikeClick = () => {
        if(!tuit.liked) {
            dispatch(updateTuitThunk({
                ...tuit,
                liked: true,
                likes: tuit.likes + 1
            }));
        }
        else {
                dispatch(updateTuitThunk({
                    ...tuit,
                    liked: false,
                    likes: tuit.likes - 1
                }));
            
        }  
    };
    const handleDislikeClick = () => {
        if(!tuit.disliked) {
            dispatch(updateTuitThunk({
                ...tuit,
                disliked: true,
                dislikes: tuit.dislikes + 1
            }));
        }
        else {
                dispatch(updateTuitThunk({
                    ...tuit,
                    disliked: false,
                    dislikes: tuit.dislikes - 1
                }));
            
        }  
    };

    return (
        <>
            <div className="mt-2 mb-2" style={{ marginLeft: '130px' }}>
                
                <FaComment className="text-secondary" /><span className="text-secondary me-5 d-none d-md-inline"> {tuit.replies}</span>
                
                <FaRetweet className="text-secondary" /><span className="text-secondary text-decoration-none me-5 d-none d-md-inline"> {tuit.retuits}</span>
               
                <span style={{"cursor": "pointer"}} 
                 onClick={handleLikeClick}>
                    <FaHeart className={tuit.liked ? "wd-red-like" : "wd-no-like"} />
                </span> 
                
                <span className="text-secondary text-decoration-none me-5 d-none d-md-inline"> {tuit.likes}</span>
                
                <span style={{"cursor": "pointer"}} 
                 onClick={handleDislikeClick}>
                    <FaThumbsDown className={tuit.disliked ? "wd-blue-thumb" : "wd-nocolor-thumb"}/> 
                </span>

                <span className="text-secondary text-decoration-none me-5 d-none d-md-inline"> {tuit.dislikes}</span>

                <FaUpload className="text-secondary" />
            </div>
        </>

    );
}
export default TuitsStat;