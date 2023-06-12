import React, {useState} from "react";
import { AiOutlinePicture } from 'react-icons/ai';
import { MdGif } from 'react-icons/md';
import { MdFormatListBulleted } from 'react-icons/md';
import { BsEmojiSmile } from 'react-icons/bs';
import { TbCalendarStats } from 'react-icons/tb';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BiBold } from 'react-icons/bi';
import { BiItalic } from 'react-icons/bi';
import {createTuitThunk} from "./services/tuits-thunks";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
 let [whatsHappening, setWhatsHappening] = useState('');
 const dispatch = useDispatch();
 const tuitClickHandler = () => {
    const newTuit = {
        id: new Date().getTime(), 
        topic: "NASA",   
        userName: "NASA",
        title: whatsHappening,
        time: "0h",   
        image: "nasa.jpg",
        liked: false,
        disliked:false,
        dislikes:0,
        replies: 0,
        retuits: 0,
        likes: 0,
        handle: "@nasa",
        tuit: whatsHappening
      }
     // const newWhatsHappening = [...whatsHappening,setWhatsHappening];
      dispatch(createTuitThunk(newTuit));
      setWhatsHappening(""); 
   console.log(whatsHappening);
 }
 return (
   <div className="row">
     <div className="col-auto col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
       <img src="/images/nasa.jpg" width={80}/>
     </div>
     <div className="col-10 ms-auto">
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
            <AiOutlinePicture className="me-4" /> 
            <MdGif className="me-4" /> 
            <MdFormatListBulleted className="me-4" /> 
            <BsEmojiSmile className="me-4" /> 
            <TbCalendarStats className="me-4" /> 
            <HiOutlineLocationMarker className="me-4" /> 
            <BiBold className="me-4" /> 
            <BiItalic className="me-4" /> 
         </div>
       </div>
     </div>
     <div className="col-12"><hr/></div>
   </div>
 );
}
export default WhatsHappening;