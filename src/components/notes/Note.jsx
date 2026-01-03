import {useState,useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faEdit, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { NoteContext } from '../../context/NoteContext';
import { FilteredNoteContext } from '../../context/FilteredNoteContext';
import EditNote from './EditNote';

function Note(){
    
    const {setNotes} = useContext(NoteContext);
    const {FilteredNotes,setFilteredNotes,setInput} = useContext(FilteredNoteContext);
    const [isEditing, setIsEditing] = useState(false);
    const [editingNoteId, setEditingNoteId] = useState(null);

    function clearAll(){
        localStorage.removeItem('notes');
        setNotes([]);
        setFilteredNotes([]);
    }

    function deleteNote(itemId){
        const data = JSON.parse(localStorage.getItem('notes'));
        if(data){
            const filter = data.filter(item=> item.id !== itemId);
            localStorage.setItem('notes',JSON.stringify(filter));
            setFilteredNotes(filter);
            setNotes(filter); 
            setInput('');
        }
    }

     function openEdit(itemId){
        setEditingNoteId(itemId);
        setIsEditing(true);
     }

       function closeEdit() {
        setIsEditing(false);
        setEditingNoteId(null);
     }

    return(
       <section className="notes-section">
           {isEditing && <EditNote editingNoteId={editingNoteId} closeEdit={closeEdit}/>}
                <div className="notes-header">
                    <h2>Your Notes</h2>
                    <button className="btn btn-danger clear-all-btn" onClick={clearAll}>
                        <FontAwesomeIcon icon={faTrashAlt} style={{scale: '1'}}/> Clear All
                    </button>
                </div>
                
                <div className="notes-grid">


             {FilteredNotes && FilteredNotes.length > 0 ? (
    FilteredNotes.map(item => (
        <div className="note-card" key={item.id}>
            <div className="note-content">
                {item.title}
            </div>
            <div className="note-footer">
                <div className="note-date">
                    <FontAwesomeIcon icon={faCalendar} style={{ scale: '1' }} />
                    {item.year}/{item.month}/{item.day}
                </div>
                <div className="note-actions">
                    <button className="action-btn edit-btn" onClick={()=>openEdit(item.id)}>
                        <FontAwesomeIcon icon={faEdit} style={{ scale: '1' }} />
                    </button>
                    <button className="action-btn delete-btn" onClick={() => deleteNote(item.id)}>
                        <FontAwesomeIcon icon={faTrash} style={{ scale: '1' }} />
                    </button>
                </div>
            </div>
        </div>
        
    ))
) : (
    <div className="no-notes-message">
        <p>No notes available</p>
    </div>
)}
                  
                    
        
                </div>
            </section>  
    )
}

export default Note;