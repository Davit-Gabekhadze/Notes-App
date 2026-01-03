import { createContext,useState,useEffect } from "react";

export const NoteContext = createContext(null);

export function NoteProvider({children}){
       const [notes,setNotes] = useState([]);
        
       useEffect(()=>{
           const storage = JSON.parse(localStorage.getItem('notes')) || [];
           setNotes(storage);
       },[])

       return(
          <NoteContext.Provider value={{notes,setNotes}}>
              {children}
          </NoteContext.Provider>
       )
}