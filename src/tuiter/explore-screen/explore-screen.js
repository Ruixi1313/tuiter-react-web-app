import React from "react";
import TuitSummaryList from "../tuit-summary-list/tuit-summary-list";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGear } from "react-icons/go";
function ExploreScreen() {
 return(
   <>
     <div className="row">
       <div className="col-11 position-relative">
         <input placeholder="Search Tuiter"
                className="form-control rounded-pill ps-5"/>
         <AiOutlineSearch className="fs-3 position-absolute 
                       wd-nudge-up"/>
       </div>
       <div className="col-1">
         <GoGear className="wd-top-4 float-end
                       fs-3 position-relative"/>
       </div>
     </div>
     <ul className="nav nav-pills mb-2 mt-2">
                        <li class="nav-item">
                            <a href="foryou.html" class="nav-link active">For You</a>
                        </li>
                        <li class="nav-item">
                            <a href="trending.html" class="nav-link">Trending</a>
                        </li>
                        <li class="nav-item">
                            <a href="news.html" class="nav-link">News</a>
                        </li>
                        <li class="nav-item">
                            <a href="sports.html" class="nav-link">Sports</a>
                        </li>
                        <li class="nav-item d-none d-md-inline">
                            <a href="entertainment.html" class="nav-link">Entertainment</a>
                        </li>
     </ul>
     <div className="position-relative mb-2">
     <img src={require('../images/starship.jpg')} alt="spaceship" className="w-100" />

       <h1 className="position-absolute wd-nudge-up text-white">
         SpaceX Starship</h1>
     </div>
     <TuitSummaryList/>
   </>
 );
};
export default ExploreScreen;