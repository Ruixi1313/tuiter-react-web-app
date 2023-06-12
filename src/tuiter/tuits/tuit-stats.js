import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../services/tuits-thunks";

function TuitStats({ comments, retweets, likes, liked }) {
  const [isLiked, setIsLiked] = useState(liked);
  const [likeCount, setLikeCount] = useState(likes);
  const [dislikeCount, setDislikeCount] = useState(0);

  const dispatch = useDispatch();

  const handleLikeClick = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      setIsLiked(true);
      setLikeCount(likeCount + 1);
    }
    dispatch(
      updateTuitThunk({
        likes: isLiked ? likeCount - 1 : likeCount + 1,
      })
    );
  };

  const handleDislikeClick = () => {
    setDislikeCount(dislikeCount + 1);
    dispatch(
      updateTuitThunk({
        dislikes: dislikeCount + 1,
      })
    );
  };

  const likeIconClass = isLiked ? "bi bi-heart-fill text-danger" : "bi bi-heart";
  const dislikeIconClass = dislikeCount > 0 ? "bi bi-hand-thumbs-down-fill text-danger" : "bi bi-hand-thumbs-down";

  return (
    <div className="row mt-2 text-secondary">
      <div className="col">
        <i className="bi bi-chat"></i>&nbsp;
        <span className="comments">{comments}</span>
      </div>
      <div className="col">
        <i className="bi bi-repeat"></i>&nbsp;
        <span className="retweets">{retweets}</span>
      </div>
      <div className="col" onClick={handleLikeClick}>
        <i className={likeIconClass}></i>&nbsp;
        <span>{likeCount}</span>
      </div>
      <div className="col" onClick={handleDislikeClick}>
        <i className={dislikeIconClass}></i>&nbsp;
        <span>{dislikeCount}</span>
      </div>
      <div className="col">
        <i className="bi bi-upload"></i>
      </div>
    </div>
  );
}

export default TuitStats;