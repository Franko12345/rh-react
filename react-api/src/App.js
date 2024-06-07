import './App.css';
import { renderImage } from  "./CSRenderer/MainRenderer.js"  
import { rotateImage, toggleCrosshair } from  "./CSRenderer/Utilities.js"  
import { useEffect, useState } from "react";
import { initCSAndTools } from "./CSInit/initTotal.js"

function App() {
  useEffect(() => {
    initCSAndTools().then(renderImage);
    }, []);
    

  const [inputValue, setInputValue] = useState('0');
    
  const handleSliderChange = (event) => {
    setInputValue(event.target.value);
    rotateImage(event.target.value)
  };

  return (
    <div className="App">
        
        <div id="Buttons">
          <button onClick={toggleCrosshair}>Crosshair</button>
          <input type="range" min='-180' max='180' value={inputValue} class="slider" onChange={handleSliderChange}></input>
        </div>

        <div id="Container">
          <div id="dicomViewer"/>
        </div>
    
    </div>
  );
}

export default App;
