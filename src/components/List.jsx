import Item from "./Item";
import { PropTypes } from "prop-types";
import { useEffect } from "react";
import axios from 'axios';

const List = ({ notes, remove, getAll }) => {
    useEffect(() => {
        fetchAllNotes();
    }, []);

    const fetchAllNotes = async() => {
        try {
            const response = await axios.get('https://notesy-app-api.onrender.com/notes');
            getAll(response.data);
        } catch (error) {
            window.alert('Error while fetching notes :- ', error.message);
        }
    }



    return (
        <>
            {notes && notes.map(note => (<Item note={note} key={note.ID} remove={remove}></Item>))}
        </>
    )
}

export default List;

List.propTypes = {
    notes: PropTypes.array,
    remove: PropTypes.func,
    getAll: PropTypes.func,
};