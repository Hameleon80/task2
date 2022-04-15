import React, { useState } from "react";
import { AddNoteAction } from "../store/actions/actions";
import { useAppDispatch } from "../store/store";

import "../styles/modal.css"
import { getNoteFromForm } from "../util/helpingFunctions";

const Modal = (props: { active: boolean, setModalActive: Function }) => {
    const dispatch = useAppDispatch();
    
    //hooks
    const[name, setName] = useState('');
    const[category, setCategory] = useState('Task');
    const[text, setText] = useState('');

    const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {setName(event.target.value)}
    const changeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {setCategory(event.target.value)};
    const changeText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {setText(event.target.value)};

    //Add note in store
    const addNote = (note: string) => {
        dispatch(AddNoteAction(note));
        props.setModalActive(false);
        setName("");
        setText("");
        setCategory("Task");
    }

    return (
        <div className={props.active ? "modal active" : "modal"}>
            <div className="modal_content"> 
                <button type="reset" className="modal__cross" onClick={() => { 
                    props.setModalActive(false); 
                    return false;
                    }}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <form method="dialog" className="createNoteForm" name="addNoteForm">
                    <p>
                        <label>
                            Name <input type="text" value={name} onChange={changeName} size={30}/>
                        </label>
                    </p>
                    <p>
                        <label> Category
                        <select value={category} onChange={changeCategory} >
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
                                return false;
                            }
                        }/>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Modal;