import { FaHeart } from "react-icons/fa"
import { Link } from "react-router-dom"

const About = () => {
    return (
        <>
            <div>
                <h4 className="mb-4"> <FaHeart className="text-danger" /> About</h4>
                <p>
                    Unleash your inner Shakespeare or just jot down your grocery list –
                    our notesy is here to fulfill all your note-taking fantasies.
                </p>
                <p>
                    It is like having a personal assistant who is fantastic at remembering
                    stuff but does not need a paycheck.
                </p>
                <p>
                    From dear diary confessions to important meeting reminders, we have
                    got a note template for every mood swing and milestone.
                </p>
                <p>
                    So, let your thoughts flow like a river of creativity, and let our app
                    be the dam that holds them all together. With us, every note is a
                    masterpiece waiting to happen!
                </p>
                <p>
                    React: <Link to='https://react.dev/' target="_blank">react.dev</Link>
                </p>
                <p>
                    Notesy version: <span className="badge bg-secondary">1.0.0</span>
                </p>
            </div>
        </>
    )
}

export default About;