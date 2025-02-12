import { FaHeart, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const isActiveLink = ({ isActive }) =>
        `btn btn-light mx-2 ${isActive && 'bg-body-secondary'}`
    return (
        <>
            <div className="d-flex justify-content-center">
                <NavLink to="/" className={isActiveLink}>
                    <FaHome size={'1.2rem'} className="me-2 text-success" /> Home
                </NavLink>
                <NavLink to="/about" className={isActiveLink}>
                    <FaHeart size={'1.2rem'} className="me-2 text-danger" /> About
                </NavLink>
            </div>
        </>
    )
}

export default Navbar;