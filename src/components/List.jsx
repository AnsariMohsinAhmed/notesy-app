import Item from "./Item";
import { notes } from './../data'

const List = () => {
    return (
        <>
            {notes && notes.map(note => (<Item note={note} key={note.id}></Item>))}
        </>
    )
}

export default List;