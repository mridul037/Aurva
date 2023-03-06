

function TextFilter({searchText,setSearchText}) {
    return (
        <div style={{width:"195px",margin:"0px 30px"}}>
        <h3>Title/Subtitle:</h3>
        <div></div>
         <input
         placeholder="search title,subtitle"
         value={searchText}
         onChange={(e)=>setSearchText(e.target.value)}
         style={{width:"140px",height:"26px",borderRadius:"6px"}}/>
       </div>
    );
  }
  
  export default TextFilter;
  