
import './App.css';
import   imgone from './images/b.jpg'
import   video from './video/V.mp4'
function App() {

  const  style_img ={
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around'
  }
  return (
    
    <div className="App">

              <div>
                        



              <h1>        Arij Khaldi           </h1>




              <video width="320" height="240" src={video}  type="video/mp4" controls/>




            
                <div  style={style_img}>

                <img   src="imges/a.jpg"       style={{width:'220px'}}  />

<img   src={imgone}     style={{width:'220px'}} />
                </div>
        
              </div>
           
                         

                        


    </div>
    
  );
}

export default App;
