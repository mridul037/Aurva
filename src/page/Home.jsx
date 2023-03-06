import styles from './Home.module.css';
import  ColorFilter from "../components/ColorFilter"; 
import  TextFilter from "../components/TextFilter"; 
import Loader  from '../components/Loader';
import Drawer  from '../components/Drawer';
import { useEffect, useState } from "react";
import axios from "axios";
import Card  from '../elememts/Card';

function Home() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false);
  const [color, setColor]=useState([]);
  const [renderCard, setRenderCard]=useState([]);
  const [searchText,setSearchText]=useState('');
  const [filteredList,setFilteredList]=useState([])
  useEffect(()=>{
    async function getColor(){
        const { data } = await axios.get(`https://random-flat-colors.vercel.app/api/random?count=7`);
        const { colors } = data;
        
        setColor(colors);
    }
    getColor()
 });
 
 useEffect(()=>{
setFilteredList(renderCard)
 },[renderCard])

 useEffect(()=>{
     if(searchText.length>0){
     let updatedList=[...renderCard];
     updatedList = updatedList.filter((item) => {
         return item.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
       });
       setFilteredList(updatedList); 
    }else{
        setFilteredList(renderCard);
        }
 },[searchText])

  function showDrawer(){
      setVisible(!visible);
  }

  return (
    <div className="Home">
        <h1 className={styles.header}>Filter By:</h1>
      <div className={styles.row}>
         <ColorFilter color={color}/>
         <TextFilter searchText={searchText} setSearchText={setSearchText}/>
      </div>
      <div>
          <Loader progress={progress} bgcolor={"black"}/>
      </div>
      <div>
          <button className={styles.button}
          disabled={visible}
          onClick={(e)=>showDrawer()}>+ Add Creatives</button>
      </div>
      <div>
          {filteredList.length>0 && filteredList.map((val)=>{
             return( <>
              <Card data={val} ></Card>
              </>)
          })}
      </div>
     {visible && <Drawer color={color} setVisible={setVisible} renderCard={renderCard} setRenderCard={setRenderCard}
     setProgress={setProgress} progress={progress}/>}
    </div>
  );
}

export default Home;
