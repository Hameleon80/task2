import React from "react";
import { useDispatch } from "react-redux";
import { ArchiveNoteAction, DeleteNoteAction } from "../store/actions/actions";
import BodyCell from "./BodyCell";

const BodyRow = (props: { row: string, keyRow: number, isArchive: boolean, setChanget: Function, isChanget:boolean, 
                setActiveModal: Function, setModalName: Function, setIsEdit: Function, setKeyToEditNote: Function, 
                setModalCategory: Function, setModalText: Function}) => {

    //split string by elements
    const str = props.row.split('|');

    const dispatch = useDispatch();

    //delete note from store
    const deleteNote = () => {
        dispatch(DeleteNoteAction(props.row));
        props.setChanget(props.isChanget? false : true);
    }

    //edit current note
    const editNote = (note: string) => {
        let values = props.row.split('|');
        props.setActiveModal(true);
        props.setModalName(values[0]);
        props.setModalCategory(values[2]);
        props.setModalText(values[3]);
        props.setIsEdit(true);
        props.setKeyToEditNote(props.keyRow);
    }

    const archiveNote = (note: string) => {
        dispatch(ArchiveNoteAction());
    }
    return (
        <tr className="row">
            {
                str.map((data, key) => {
                    return (
                        <BodyCell value={data} keyCell={key} />
                    )
                })
            }
            {
                !props.isArchive
                    ?
                    <td>
                        <div className="hideText div-icon">
                            <button type="submit" className="note_buttons" onClick={() => {
                                editNote("");
                            }} ><i className="fa-solid fa-pen"></i></button>

                            <button type="submit" className="note_buttons" onClick={() => archiveNote("")} ><i className="fa-solid fa-box"></i></button>
                            
                            <button type="submit" className="note_buttons" onClick={() => {
                                    deleteNote();
                                }} ><i className="fa-solid fa-trash" ></i></button>
                        </div>
                    </td>
                    : null
            }
        </tr>
    )
}

export default BodyRow;