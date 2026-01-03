import { createContext,useState,useEffect} from "react";

export const FilteredNoteContext = createContext(null);

export function FilteredNoteProvider({children}){

    const [input,setInput] = useState('');
    const [FilteredNotes,setFilteredNotes] = useState([]);

    return(
        <FilteredNoteContext.Provider value={{input,setInput,FilteredNotes,setFilteredNotes}}>
            {children}
        </FilteredNoteContext.Provider>
    )
}