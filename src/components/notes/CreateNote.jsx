import { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser, faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { NoteContext } from '../../context/NoteContext';

function CreateNote() {
   const [count, setCount] = useState(0);
   const [input, setInput] = useState(''); 
   const { notes, setNotes } = useContext(NoteContext);

      function addNote() {
          if (input.trim() !== '') {
             const currentDate = new Date(Date.now());
             const newNote = {
                id: Date.now(),
                title: input.trim(),
                year: currentDate.getFullYear(),
                month: currentDate.getMonth() + 1,
                day: currentDate.getDate()
            };
             const updatedNotes = [...notes, newNote];
             setNotes(updatedNotes);
             localStorage.setItem('notes', JSON.stringify(updatedNotes));
             setInput('');
             setCount(0);  
          }
     }

    const handleInputChange = (e) => {
        const newInput = e.target.value;
        if (newInput.length <= 80) {
            setInput(newInput);
            setCount(newInput.length);  
        }
    };

    return (
        <section className="add-note-section">
            <div className="section-title">
                <FontAwesomeIcon icon={faPlusCircle} style={{ scale: '1.4' }} />
                <h2>Add New Note</h2>
            </div>

            <div className="textarea-container">
                <textarea
                    className="note-textarea"
                    placeholder="Write your note here..."
                    onChange={handleInputChange}  
                    value={input}
                ></textarea>
            </div>

            <div className="char-count">
                <span>{count}/80</span> characters
            </div>

            <div className="buttons-container">
                <button
                    className="btn btn-danger"
                    onClick={() => { setInput(''); setCount(0); }} 
                >
                    <FontAwesomeIcon icon={faEraser} /> Clear Text
                </button>
                <button className="btn btn-primary" onClick={addNote}>
                    <FontAwesomeIcon icon={faPlus} /> Add Note
                </button>
            </div>
        </section>
    );
}

export default CreateNote;
