import React from "react";
import { useDispatch } from "react-redux";
import { ArchiveNoteAction, DeleteNoteAction } from "../store/actions/actions";
import BodyCell from "./BodyCell";

const BodyRow = (props: { row: string, keyRow: number, isArchive: boolean, setChanget: Function, isChanget:boolean, 
                setActiveModal: Function, setModalName: Function, setIsEdit: Function, setKeyToEditNote: Function, 
                setModalCategory: Function, setModalText: Function, setModalArchiveIsActive: Function, setCategoryShow: Function}) => {

    //split string by elements
    const str = props.row.split('|');

    const dispatch = useDispatch();

    //delete note from store
    const deleteNote = () => {
        dispatch(DeleteNoteAction(props.row));
        props.setChanget(props.isChanget? false : true);
    }

    //edit current note
    const editNote = () => {
        props.setActiveModal(true);
        props.setModalName(str[0]);
        props.setModalCategory(str[2]);
        props.setModalText(str[3]);
        props.setIsEdit(true);
        props.setKeyToEditNote(props.keyRow);
    }

    //add note to archive
    const archiveNote = () => {
        dispatch(ArchiveNoteAction(props.row));
        props.setChanget(props.isChanget? false : true);
    }

    //view archive notes
    const viewArchiveNotes = () =>{
        props.setModalArchiveIsActive(true);
        props.setCategoryShow(str[0]);
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
                            <button type="submit" className="note_buttons" onClick={() => editNote()} ><i className="fa-solid fa-pen"></i></button>

                            <button type="submit" className="note_buttons" onClick={() => archiveNote()} ><i className="fa-solid fa-box"></i></button>
                            
                            <button type="submit" className="note_buttons" onClick={() => deleteNote() } ><i className="fa-solid fa-trash" ></i></button>
                        </div>
                    </td>
                    : <button type="submit" onClick={() => viewArchiveNotes()}>View</button>
            }
        </tr>
    )
}

export default BodyRow;