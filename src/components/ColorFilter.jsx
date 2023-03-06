import { useEffect, useState } from "react";
import axios from "axios";
import Circular  from "../elememts/Circular";

function ColorFilter({color}) {
   
  return (
    <div style={{width:"195px",margin:"0px 30px"}}>
     <h3>Color:</h3>
     <div></div>
    <div style={{textAlign:"start"}}>
      {color.map((val)=>{
        return(<Circular value={val}/>)
      })}
      </div>
    </div>
  );
}

export default ColorFilter;
