import React from "react";
import { IoIosCloseCircleOutline, IoMdChatbubbles, IoMdRepeat, IoMdHeart, IoMdShareAlt, IoMdCheckmarkCircle,IoIosThumbsDown } from "react-icons/io";
import {useDispatch } from "react-redux";
import {deleteTuitThunk,updateTuitThunk} from "../services/tuits-thunk";

const TuitItem = (
  {
    tuit = {
      "_id": 123, "topic": "Space", "userName": "SpaceX",
      "title": "Tesla CyberTruck lands on Mars and picks up the Curiosity rover on its 6' bed",
      "time": "2h",
      "image": "spacex.png",
      "liked": true,
      "replies": 123,
      "retuits": 432,
      "likes": 12345,
      "dislikes":33,
      "handle": "@spacex",
      "tuit": "This morning ar 12:34 EST Earth time, a convoy of Tesla CyberTrucks drove across the Martin landscape after picking up the Curiosity, Sojourner, Spirit, and Performance on their 6' beds"
    }
  }
) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => { dispatch(deleteTuitThunk(id)); }
  // const addLikeHandler = (id) => { dispatch(addLike(id)); }

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-auto">
          <div>
            <img alt="pic" className="rounded-circle float-end" width={50} src={`/img/${tuit.image}`} />
          </div>
        </div>
        <div className="col-10">
          <div className="wd-grid-row">
            <span className="float-end" onClick={() => deleteTuitHandler(tuit._id)}><IoIosCloseCircleOutline /></span>
            <span className="wd-name">{tuit.userName}</span>
            <IoMdCheckmarkCircle style={{ color: "#2376FD" }} />
            <span> {tuit.handle} .</span>
            <span> {tuit.time}</span>
          </div>
          <div className="wd-grid-row">
            <span className="wd-content">{tuit.tuit}</span>
          </div>
          <div className="wd-function">
            <div className="wd-other">
              <div className="wd-grid-col-one-four">
                <IoMdChatbubbles />
                <span> {tuit.replies}</span>
              </div>
              <div className="wd-grid-col-one-four">
                <IoMdRepeat />
                <span> {tuit.retuits}</span>
              </div>
              <div className="wd-grid-col-one-four">
                <IoMdHeart className="text-danger" onClick={() => dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))}/>
                <span className="ms-2">{tuit.likes}</span>
              </div>
              <div className="wd-grid-col-one-four">
                <IoIosThumbsDown className="text-tertiary-color" onClick={() => dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1 }))}/>
                <span className="ms-2">{tuit.dislikes}</span>
              </div>
              <div className="wd-grid-col-one-four">
                <IoMdShareAlt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default TuitItem;