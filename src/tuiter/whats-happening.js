import React, {useState} from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { AiOutlineFileGif } from "react-icons/ai";
import { MdFormatListBulleted } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiBold, BiItalic } from "react-icons/bi";
import { BiCalendarCheck } from "react-icons/bi";
// import { createTuit } from "./reducer/tuits-reducer";
import {useDispatch} from "react-redux";
import {createTuitThunk} from "./services/tuits-thunks";
const WhatsHappening = () => {
 let [whatsHappening, setWhatsHappening] = useState('');
 const dispatch = useDispatch();
 const tuitClickHandler = () => {
    const newTuit = {
        tuit: whatsHappening
      }
      newTuit.image="tesla.png";
      newTuit.liked=false;
      newTuit.likes=0;
      newTuit.retuits=0;
      newTuit.replies=0;
      newTuit.handle="@tesla";
      newTuit.dislike=0;
      dispatch(createTuitThunk(newTuit));
      setWhatsHappening("");
   console.log(whatsHappening);
 }
 return (
   <div className="row">
     <div className="col-auto">
       <img src={require(`./images/nasa.png`)} alt="nasa" width={60}/>
     </div>
     <div className="col-10">
       <textarea value={whatsHappening} placeholder="What's happening?"
               className="form-control border-0"
               onChange={(event) => setWhatsHappening(event.target.value)}>
       </textarea>
       <div>
         <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                 onClick={tuitClickHandler}>
           Tuit
         </button>
         <div className="text-primary fs-2">
           <AiOutlinePicture className="me-3"/>
           <AiOutlineFileGif className="me-3"/>
           <MdFormatListBulleted className="me-3"/>
           <BsEmojiSmile className="me-3"/>
           <BiCalendarCheck className="me-3"/>
           <HiOutlineLocationMarker className="me-3"/>
           <BiBold className="me-3"/>
           <BiItalic className="me-3"/>
         </div>
       </div>
     </div>
     <div className="col-12"><hr/></div>
   </div>
 );
}
export default WhatsHappening;