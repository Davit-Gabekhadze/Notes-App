import { useState,useEffect } from 'react';
import './assets/css/style.css';
import {NoteProvider} from './context/NoteContext'
import { FilteredNoteProvider } from './context/FilteredNoteContext';
import Header from './components/layout/Header';
import CreateNote from './components/notes/CreateNote';
import SearchNotes from './components/notes/SearchNotes';
import Note from './components/notes/Note';
import Footer from './components/layout/Footer';


function App() {

   useEffect(()=>{
       document.title = 'Notes App';
   },[])

  return (
  <>
  <NoteProvider>
  <FilteredNoteProvider>
  <Header />
  <main className="container">
    <div className="main-content">
      <CreateNote />
      <SearchNotes/>
      <Note/>
    </div>    
  </main>
  <Footer />
  </FilteredNoteProvider>
  </NoteProvider>
  </>
  )
}

export default App
