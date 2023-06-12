import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";
import {FaTimesCircle} from "react-icons/fa";
import { AiFillCheckCircle } from 'react-icons/ai';
import TuitsStat from "./tuits-stat";
import {deleteTuitThunk} from "../services/tuits-thunks";

const TuitsItem = (
    { tuit
    }
   ) => {
    const dispatch = useDispatch();
const deleteTuitHandler = (id) => {
  dispatch(deleteTuitThunk(id));
}
    return(
     <li className="list-group-item">
      <div className="row align-items-center">
        <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
          <img width={70} className="float-end rounded-circle" src={`/images/${tuit.image}`}/>
        </div>
        <div className="col-8 col-sm-8 col-md-8 col-lg-11 col-xl-10 col-xxl-10">
          <div>
            <FaTimesCircle className="text-secondary float-end"
              onClick={() => deleteTuitHandler(tuit._id)} />
            <strong>{tuit.username}</strong> <span class="fa fa-check-circle"></span> <AiFillCheckCircle style={{ color: 'blue'}} />  {tuit.handle} . {tuit.time}
          </div>
          <div className="text-wrap text-black mb-1">
            {tuit.tuit}
          </div>
        </div>
        <div>
        <TuitsStat tuit={tuit}/>
        {/* <TuitsStat /> */}
        </div>
      </div>
     </li>
    );
   };

   export default TuitsItem;