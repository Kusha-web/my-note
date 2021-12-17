import NotesList from "./components/NotesList";
import { useState } from 'react';
import Search from './components/Search';
import { nanoid } from 'nanoid';
import { addNoteApi, deleteNoteApi, getUsers } from './service/api'
import { useEffect } from 'react'
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, [])

  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response.data);
    setNotes(response.data);
  }

  const addingApi = async (newNote) => {
    await addNoteApi(newNote);
  }

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    addingApi(newNote);
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deletingApi = async (id) => {
    await deleteNoteApi(id);
  }

  //Deleting Note
  const deleteNote = (id) => {
    deletingApi(id);
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  } 

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={ setDarkMode }/>
        <Search handleSearchText={ setSearchText }/>
        <NotesList 
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
          handleAddNote={ addNote } 
          handleDeleteNote={ deleteNote }
        />
      </div>
    </div>
  );
}

export default App;
