import { ArchiveNoteAction, DeleteNoteAction, EditNoteAction } from "../store/actions/actions";
import { useAppDispatch } from "../store/store";

const BodyCell = (props: { value: string, key: number }) => {
    let regex = '#icons';

    const dispatch = useAppDispatch();

    //delete note from store
    const deleteNote = (note: string) =>{
        dispatch(DeleteNoteAction(note));
        return false;
    }

    const editNote = (note: string) =>{
        dispatch(EditNoteAction());
        return false;
    }

    const archiveNote = (note: string) =>{
        dispatch(ArchiveNoteAction());
        return false;
    }

    if (props.value.includes(regex)) {
        return (
            <td>
                <div className="hideText div-icon">
                <button type="submit" className="note_buttons" onClick={()=>editNote("")} ><i className="fa-solid fa-pen"></i></button>
                    <button type="submit" className="note_buttons" onClick={()=>archiveNote("")} ><i className="fa-solid fa-box"></i></button>
                    <button type="submit" className="note_buttons" onClick={()=>deleteNote("")} ><i className="fa-solid fa-trash" ></i></button>
                </div>
            </td>
        )
    } else {
        return (
            <td>
                <div className="hideText">
                    {
                        props.value
                    }
                </div>
            </td>
        )
    }
}

export default BodyCell;