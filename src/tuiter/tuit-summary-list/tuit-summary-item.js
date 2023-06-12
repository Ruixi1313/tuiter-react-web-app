import React from "react";
function TuitSummaryItem  (
 
   {tuit}
 
)  {
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-10">
       <div>{tuit.userName} . {tuit.time}</div>
       <div className="fw-bolder">{tuit.topic}</div>
       <div>{tuit.title}</div>
     </div>
     <div className="col-2">
       <img width={70} className="float-end rounded-3" alt = "" src={tuit.image}/>
     </div>
   </div>
  </li>
 );
};
export default TuitSummaryItem;