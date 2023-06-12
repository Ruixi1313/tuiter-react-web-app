import React from "react";
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import {deleteTuitThunk} from "../services/tuits-thunks";

function TuitItem({ tuit }) {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-1">
          <img
            src={tuit.image}
            alt="profile"
            className="rounded-circle"
            height="48px"
            width="48px"
          />
        </div>

        <div className="col-11 ">
              <span className="fw-bold">{tuit.userName}</span>&nbsp;
              <i className="bi bi-patch-check-fill text-primary"></i>&nbsp;
              <span className="text-secondary">
                {tuit.handle}  <i className="bi bi-dot"></i> {tuit.time}
              </span>
              <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}></i>
            <div>{tuit.tuit}</div>
            <div style={{ marginTop: "18px" }}>
            <TuitStats 
            
              liked={tuit.liked}
              comments={tuit.replies}
              retweets={tuit.retuits}
              likes={tuit.likes}
            />
            </div>
        </div>
      </div>
    </li>
  );
}

export default TuitItem;