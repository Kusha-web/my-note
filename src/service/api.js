import axios from 'axios';

const url = 'http://127.0.0.1:3003/user';

export const getUsers = async () => {
    return await axios.get(url);
}

export const addNoteApi = async (newNote) => {
    return await axios.post(url, newNote);
}

export const deleteNoteApi = async (id) => {
    return await axios.delete(`${url}/${id}`);
}