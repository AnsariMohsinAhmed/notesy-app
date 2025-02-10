import { FaPlus } from "react-icons/fa";

const Form = () => {
    return (
        <>
            <form >
                <div className="input-group mb-4">
                    <input type="text" className="form-control" placeholder="Write some notes..." />
                    <button className="btn btn-success" type="submit">
                        <FaPlus />
                    </button>
                </div>
            </form>
        </>
    )
}

export default Form;