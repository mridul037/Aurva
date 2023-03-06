




function Circular({value,handleColor}) {
    return (
        <div style={{height:  "25px",
        width: "25px",
        backgroundColor: `${value}`,
        borderRadius: "50%",
        display: "inline-block",
        margin: "4px",
        cursor:"pointer"}}
        onClick={(e)=>handleColor(e)}>
             
          </div>
    );
  }
  
  export default Circular;
  