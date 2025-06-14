import { useState } from "react"
import Form from './../components/Form'
import Empty from './../components/Empty'
import List from './../components/List'

const Home = () => {
    const [notes, setNotes] = useState([])
  const add = newNotes => {
    setNotes([newNotes, ...notes])
  }

  const remove = id => {
    setNotes(notes.filter(i => i.ID !== id))
  }

  const getAll = notes => {
    setNotes(notes)
  }
    return (
        <>
            <div className="row">
                <div className="col">
                    <Form add={add} />
                    <List notes={notes} remove={remove} getAll={getAll} />
                    <Empty notes={notes} />
                </div>
            </div>
        </>
    )
}

export default Home;