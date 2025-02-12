import { FaPlus } from "react-icons/fa";
import { PropTypes } from "prop-types";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const Form = ({ add }) => {
    const [note, setNote] = useState('')

    const handleNoteChange = event => {
        setNote(event.target.value)
    }

    const handleSubmit = event => {
        try {
            event.preventDefault()
            if (note === '') {
                window.alert('Please enter note')
                return
            }
            add({ id: uuid(), note })
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