import {useState,useEffect} from 'react';

function Footer(){

    const [year,setYear] = useState(null);

  useEffect(()=>{
    const year = new Date().getFullYear();
    setYear(year);
  },[]);

    return(
        <footer>
           <div className="container">
              <p>Notes App &copy; {year} | By Davit Gabekhadze</p>
           </div>
        </footer>
    )
}

export default Footer;