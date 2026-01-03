import {useState,useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStickyNote } from "@fortawesome/free-solid-svg-icons";

function Header(){  
   return(
    <header>
    <div className="container">
            <div className="header-content">
              <div className="logo">
                  <FontAwesomeIcon icon={faStickyNote} style={{color: 'white',scale: '1.8'}}/> 
                  <h1>Notes App</h1>
              </div>
            </div>
         </div>
    </header>
    )
}

export default Header