import Item from "./Item";
import { PropTypes } from "prop-types";
import { useEffect } from "react";
import { notes as notesData } from "./../data";

const List = ({ notes, remove, getAll }) => {
    useEffect(() => {
        getAll(notesData)
    }, [])
    return (
        <>
            {notes && notes.map(note => (<Item note={note} key={note.id} remove={remove}></Item>))}
        </>
    )
}

export default List;

List.propTypes = {
    notes: PropTypes.array,
    remove: PropTypes.func,
    getAll: PropTypes.func,
};