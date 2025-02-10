import { FaDove } from "react-icons/fa";

const Empty = () => {
    return (
        <>
            { false && (
                <div className="text-center p-3 text-muted">
                    <h1 className="display-4 text-secondary">
                        <FaDove className="me-2" />
                    </h1>
                    No notes found
                </div>
            )}
        </>
    )
}

export default Empty;