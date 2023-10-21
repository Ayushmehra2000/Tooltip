import { useState } from 'react';
import './App.css';
import { Message } from './message';

function App() {
  const [alignment,setAlignment] = useState({left:120,top:-80});
  const [message,setMessage] = useState(false);
  const mouseEnter =()=>{
    setMessage(true);
  }
  const mouseLeave=()=>{
    setMessage(false);
  }
  const handlealignment =(data)=>{
    if(data=== "left"){
      setAlignment({left:-180 ,top:-80});
    }else if(data === "right"){
      setAlignment({left:120,top:-80});
    }else if(data === "top"){
      setAlignment({left:-30,top:-150});
    }else{
      setAlignment({left:-15,top:0});
    }
  }
  return (<>
    <header>ToolTip App</header>
    <div className="App">
      <div className='button'>
        <h3>Select the position</h3>
        <button onClick={()=>handlealignment("left")}>Left</button>
        <button onClick={()=>handlealignment("right")}>Right</button>
        <button onClick={()=>handlealignment("top")}>Top</button>
        <button onClick={()=>handlealignment("bottom")}>Bottom</button>
      </div>
      <div className='block'>
        <p className='hover-btn' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>Hover over me!</p>
        <Message message={message} alignment={alignment}/>
      </div>
    </div>
    </>
  );

}

export default App;
