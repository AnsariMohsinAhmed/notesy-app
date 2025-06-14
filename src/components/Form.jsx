import { FaPlus } from "react-icons/fa";
import { PropTypes } from "prop-types";
import { useState } from "react";
import axios from "axios";

const Form = ({ add }) => {
    const [note, setNote] = useState('')

    const handleNoteChange = event => {
        setNote(event.target.value)
    }

    const handleSubmit = async event => {
        try {
            event.preventDefault()
            if (note === '') {
                window.alert('Please enter note')
                return
            }
            const response = await axios.post('https://notesy-app-api.onrender.com/create-note', { note });
            add({ ID: response.data.id, Note: response.data.note });
        } catch (err) {
            window.alert('Error occurred: ', err.message)
        } finally {
            setNote('')
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-4">
                    <input type="text" className="form-control" value={note} onChange={handleNoteChange} placeholder="Write some notes..." />
                    <button className="btn btn-success" type="submit">
                        <FaPlus />
                    </button>
                </div>
            </form>
        </>
    )
}

export default Form;

Form.propTypes = {
    add: PropTypes.func,
};