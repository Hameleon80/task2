import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNoteAction } from "../store/actions/actions";
import "../styles/modal.css"
import { getNoteFromForm } from "../util/helpingFunctions";

const Modal = (props: { active: boolean, setModalActive: Function }) => {
    const dispatch = useDispatch();

    const addNote = (note: string) => {
        dispatch(addNoteAction(note));
        props.setModalActive(false);
    }

    const[name, setName] = useState('');
    const[category, setCategory] = useState('');
    const[text, setText] = useState('');

    const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {setName(event.target.value)}
    const changeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {setCategory(event.target.value)};
    const changeText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {setText(event.target.value)};

    return (
        <div className={props.active ? "modal active" : "modal"}>
            <div className="modal_content">
                <a className="modal__cross" href=" " onClick={() => { props.setModalActive(false) }}>
                    <i className="fa-solid fa-xmark"></i>
                </a>
                <form className="createNoteForm">
                    <p>
                        <label>
                            Name <input type="text" value={name} onChange={changeName} size={30} />
                        </label>
                    </p>
                    <p>
                        <label> Category <i> </i>
                        <select value={category} onChange={changeCategory}>
                            <option disabled>Choose category</option>
                            <option value="Task">Task</option>
                            <option value="Random Thought">Random Thought</option>
                            <option value="Idea">Idea</option>
                        </select>
                        </label>
                    </p>
                    <p>
                        <label>Content</label><br/>
                        <textarea value={text} onChange={changeText} cols={38} rows={5}></textarea>
                    </p>
                    <p className="alignRight">
                        <input type="submit" value="Create" id="create" onClick={()=>{
                                addNote(getNoteFromForm([name, new Date(), category, text]));
                            }
                        }/>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Modal;