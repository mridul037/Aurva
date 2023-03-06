import { useEffect } from "react";



function Card({data}) {
   
    return (
        <div style={{border: "1px solid",
            width: "600px",
            margin: "20px 10px",
            backgroundColor:`${data?.selectedColor}`}}>
            <h1>{data?.title}</h1>
            <h3>{data?.subTitle}</h3>
             
          </div>
    );
  }
  
  export default Card;
  