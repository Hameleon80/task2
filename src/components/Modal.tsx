import React from "react";
import { AddNoteAction, EditNoteAction } from "../store/actions/actions";
import { useAppDispatch } from "../store/store";

import "../styles/modal.css"
import { getNoteFromForm } from "../util/helpingFunctions";

function Modal (props: {
        active: boolean, setModalActive: Function, nameNote: string, setModalName: Function, isEdit: boolean
        setIsEdit: Function, keyToEditNote: number, nameCategory: string, setModalCategory: Function
        noteText: string, setModalText: Function}) {

    const dispatch = useAppDispatch();
    
    const changeName = (event: React.ChangeEvent<HTMLInputElement>) => { props.setModalName(event.target.value) }
    const changeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => { props.setModalCategory(event.target.value) };
    const changeText = (event: React.ChangeEvent<HTMLTextAreaElement>) => { props.setModalText(event.target.value) };
    
    //Clear text fields in form
    const clearFields = () =>{
        props.setModalName("");
        props.setModalText("");
        props.setModalCategory("Task");
    }

    //Add note in store
    const addNote = (note: string) => {
        clearFields();
        dispatch(AddNoteAction(note));
        props.setModalActive(false);
        clearFields();
    }

    //Edit note in store with index = 'index'
    const editNote = (index: number, note: string) => {
        dispatch(EditNoteAction({ index, note }));
        clearFields();
        props.setIsEdit(false);
        props.setModalActive(false);
    }

    return (
        <div className={props.active ? "modal active" : "modal"} >
            <div className="modal_content">
                <button type="reset" className="modal__cross" onClick={() => {
                    props.setModalActive(false);
                    props.setIsEdit(false);
                }}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <form method="dialog" className="createNoteForm" name="addNoteForm">
                    <p>
                        <label>
                            Name <input type="text" value = {props.nameNote} onChange={changeName} className="formText" name="name"/>
                        </label>
                    </p>
                    <p>
                        <label> Category
                            <select value={ props.nameCategory } onChange={changeCategory} >
                                <option disabled>Choose category</option>
                                <option value="Task">Task</option>
                                <option value="Random Thought">Random Thought</option>
                                <option value="Idea">Idea</option>
                            </select>
                        </label>
                    </p>
                    <p>
                        <label>Content</label><br />
                        <textarea value={ props.noteText } onChange={changeText} className="formText" rows={5}></textarea>
                    </p>
                    <p className="alignRight">
                        <input type="submit" value={props.isEdit ? "Edit" : "Create"} onClick={() => {
                            props.isEdit ?
                                editNote(props.keyToEditNote, getNoteFromForm([props.nameNote, new Date(), props.nameCategory, props.noteText]))
                                :
                                addNote(getNoteFromForm([props.nameNote, new Date(), props.nameCategory, props.noteText]))
                        }
                        } />
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Modal;