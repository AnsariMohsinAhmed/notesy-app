import PropTypes from 'prop-types'
import { FaTrash } from "react-icons/fa";

const Item = ({ note, remove }) => {
    const handleRemove = () => {
        try {
            remove(note.id)
        } catch (err) {
            window.alert('Error occurred: ', err.message)
        }
    }
    return (
        <>
            <div className="card bg-body-secondary border-0 mb-2">
                <div className="card-body">
                    <p className="card-text">
                        <span className="d-flex justify-content-between align-items-center">
                            <span>{note.note}</span>
                            <button type="button" className="btn btn-light ms-3" onClick={handleRemove}>
                                <FaTrash size={'1rem'} className="text-danger" />
                            </button>
                        </span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Item;

Item.propTypes = {
    note: PropTypes.object,
    remove: PropTypes.func,
};