import {useState,useEffect,useContext} from 'react';
import { NoteContext } from '../../context/NoteContext';

function EditNote({editingNoteId,closeEdit}){
   const [noteInfo,setnoteInfo] = useState([]);
   const storage = JSON.parse(localStorage.getItem('notes'));
   const {setNotes} = useContext(NoteContext);

    useEffect(()=>{
        if(storage){
          const FoundNote = storage.find(item=> item.id == editingNoteId);
          setnoteInfo(FoundNote);
        }
    },[editingNoteId]);

    function onUpdate(){
       if(storage && noteInfo){
           const UpdatedNotes = storage.map(item=> item.id == editingNoteId ? {...item,title: noteInfo.title}: item);
           localStorage.setItem('notes', JSON.stringify(UpdatedNotes));
           console.log(UpdatedNotes);
           setNotes(UpdatedNotes);
           const UpdatedNote = UpdatedNotes.find(item=> item.id == editingNoteId);
           setnoteInfo(UpdatedNote);
           closeEdit();
       }  
    }

    function onClose(){
       closeEdit();
    }
    
    return(
    <div className="edit-modal-overlay" >
      <div className="edit-modal">
        <div className="modal-header">
          <h3>Edit Note</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          <div className="textarea-container">
            <textarea 
              className="edit-textarea"
              placeholder="Edit your note..."
              autoFocus
              onChange={(e)=>setnoteInfo({ ...noteInfo, title: e.target.value })}
              value={noteInfo&&noteInfo.title}
            ></textarea>
          </div>
          
          <div className="char-count-edit">
            <span>0/80</span> characters
          </div>
        </div>
        
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={onUpdate}>
            Update Note
          </button>
        </div>
      </div>
    </div>
  )}


export default EditNote;