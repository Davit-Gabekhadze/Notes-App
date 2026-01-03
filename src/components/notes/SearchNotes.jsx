import {useState,useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { NoteContext } from '../../context/NoteContext';
import { FilteredNoteContext } from '../../context/FilteredNoteContext';

function SearchNotes(){

    const {notes} = useContext(NoteContext);
    const {input,setInput,setFilteredNotes} = useContext(FilteredNoteContext);

    useEffect(()=>{
        if(input.trim() == ''){
         setFilteredNotes(notes);
       }    
    },[input,notes]);

    useEffect(()=>{
        if(input.trim() !== ''){
            const Filtered = notes.filter(item => item.title.toLowerCase().includes(input.toLowerCase()));
            setFilteredNotes(Filtered);
        }
    },[input]);

    return(
         <section className="search-section">
                <div className="section-title">
                    <FontAwesomeIcon icon={faSearch} style={{scale: '1.4'}}/>
                    <h2>Search Notes</h2>
                </div>
                
                <div className="search-container">
                    <div className="search-input-wrapper">
                        <input type="text" className="search-input" onChange={(e)=>setInput(e.target.value)} value={input} placeholder="Search for notes..." />
                    </div>
                    <div className="search-hint">
                        Type to search through your notes
                    </div>
                </div>
            </section>
    )
}

export default SearchNotes;