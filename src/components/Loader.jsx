

function Loader({bgcolor,progress,height}) {
    const Parentdiv = {
        height: height,
        width: '600px',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin:"40px 10px"
      }
      
      const Childdiv = {
        height: '100%',
        width: `${parseInt(progress)*20}%`,
        backgroundColor: bgcolor,
        borderRadius:40,
        textAlign: 'right'
      }
      
      const progresstext = {
        padding: 10,
        color: 'white',
        fontWeight: 900
      }
      const block={
        display:"flex",flexDirection:"row",alignItems:"center"
      }
    return (
        <div style={block}>
        <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress*20}%`}</span>
      </div>
    
    </div>
    <span> {progress} /5 Creatives

</span>

    </div >
    );
  }
  
  export default Loader;
  