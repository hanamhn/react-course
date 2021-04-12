import { useState } from 'react'
import Backdrop from './Backdrop'
import Modal from './Modal'


const Todo = ({ text }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const deleteHandler = () => {
        setModalIsOpen(true)
    }

    const closeModalHandler = () => {
        setModalIsOpen(false)
    }

    return (
        <div className='card'>
            <h2>{text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
            {modalIsOpen && <Backdrop onClick={closeModalHandler} />}

        </div>
    )
}

export default Todo
