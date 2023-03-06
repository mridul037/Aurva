import { useState } from "react";
import Circular from "../elememts/Circular";

function Drawer({ color,setVisible,renderCard,setRenderCard,setProgress,progress }) {
    const [title,setTitle]=useState('');
    const [subTitle,setSubTitle]=useState('');
    const [selectedColor,setSelectedColor]=useState('')
    const handleSubmit=(e)=>{
     e.preventDefault();
     let data = {
         title,
         subTitle,
         selectedColor
     }
     if(progress<5){
     setRenderCard([...renderCard,data])
     setVisible(false);
     setProgress((prevState)=>prevState+1)
    }else{
        alert("You have reached maximum card please Refresh !!!")
    }
    }
    const handleTitleChange=(e)=>{
        e.preventDefault();
        setTitle(e.target.value)
    }
    const handleSubTitleChange=(e)=>{
        e.preventDefault();
        setSubTitle(e.target.value)
    }
    const handleColor=(e)=>{
        e.preventDefault();
        setSelectedColor(e.target.style.backgroundColor);     
    }
  return (
    <div
      style={{
        width: "600px",
        float: "right",
        height: "100%",
        position: "fixed",
        right: 0,
        top: "0px",
        backgroundColor: "white",
        border: "2px solid",
      }}
    >
      <h1>Creative Section</h1>
      <form onSubmit={(e) => {handleSubmit(e)}}>
        <div>
          <div style={{ margin: "10px 30px", height: "80px",textAlign:"left" }}>
            <label value={title} for="title">title:</label>
            <br />

            <input
              style={{ width: "60%", height: "20px", border: "1px solid" }}
              type="text"
              id="title"
              name="title"
              placeholder="Enter text"
              onChange={(e)=>{
                  handleTitleChange(e)
              }}
            />
            <br />
          </div>
          <div style={{ margin: "10px 30px", height: "80px" ,textAlign:"left"}}>
            <label value={subTitle} for="subTitle">subtitle:</label>
            <br />

            <input
              style={{ width: "60%", height: "20px", border: "1px solid" }}
              type="text"
              id="sub-title"
              name="sub-title"
              placeholder="Enter text"
              onChange={(e)=>{
                handleSubTitleChange(e)

              }}
            />
            <br />
          </div>
          <div style={{ width: "195px", margin: "0px 30px" }}>
            <h3>background color:</h3>
            <div></div>
            <div style={{ textAlign: "start" }}>
              {color.map((val) => {
                return <Circular value={val} handleColor={handleColor}  />;
              })}
            </div>
          </div>
          <input
            style={{ position: "absolute", left: "10px", top: "70%" ,width: "200px",
            height: "30px",
            backgroundColor: "white",
            border: "1px solid",
            color: "black",
            cursor: "pointer",
            margin:"10px 30px",
            fontWeight:"600"
            }}
            type="submit"
            value="Done"

          />
        </div>
      </form>
    </div>
  );
}

export default Drawer;
