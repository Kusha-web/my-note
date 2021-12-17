import { useState } from 'react';


const AddNote = ( { handleAddNote }) => {
    const [noteText, setNoteText] = useState('');
    const textLimit = 200;

    const handleChange = (event) => {
        if(textLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
    }
    
    const handleSaveClick = () => {
        if(noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }
    }

    return(
        <div className='note add'>
            <textarea rows='8' cols='10' placeholder='Add your new note here..' 
            onChange={(e) => handleChange(e)}
            value = {noteText}  
            ></textarea>
            <div className='note-footer'>
                <small>{textLimit - noteText.length} Remaining</small>
                <button className='save' onClick={ handleSaveClick }>Save</button>
            </div>
        </div>
    )
}

export default AddNote;