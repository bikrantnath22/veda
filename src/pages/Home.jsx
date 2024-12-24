import React from "react";
import { Link } from "react-router-dom";
import Slick from "../components/Slick";
import Artical from "../components/Artical"

function App() {
  return (
    <div className="bg-gray-100">

      {/* artical component start */}
      
       <Artical/>
    
       {/* slick slideshow start */}
      
      <div className=""> 
        <Slick />
      </div>
    </div>
  );
}

export default App;
