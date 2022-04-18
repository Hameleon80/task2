import { UnArchiveNoteAction } from "../store/actions/actions";
import { useAppDispatch } from "../store/store";

export const ModalArchiveNotes = (props: { tableHead: string[], archiveNotes: string[], active: boolean, 
                setModalActive: Function, categoryShow: string }) => {

    const dispatch = useAppDispatch();

    //Unarchive note
    const unarchive = (note: string) => {
        props.setModalActive(false);
        dispatch(UnArchiveNoteAction(note))
    }

    return (
        <div className={props.active ? "modalArchive active" : "modalArchive"} >
            <div className="modal_content">
                {/* Close button */}
                <button type="reset" className="modal__cross" onClick={() => {
                    props.setModalActive(false);
                }}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                
                <table>
                    <tr>
                        {
                            props.tableHead.map((value) => {
                                return <th>{value}</th>
                            })
                        }
                    </tr>
                    {
                        props.archiveNotes.map((value) => {
                            let tempArr = value.split('|')
                            return (
                                <tr className="row">{
                                    tempArr[2] === props.categoryShow
                                        ?
                                        tempArr.map((data) => {
                                            return <td><div className="hide-text pl-8">{data}</div></td>
                                        })
                                        :
                                        null
                                }
                                {
                                    tempArr[2] === props.categoryShow
                                    ?
                                    <td><button onClick={()=> unarchive(value)}>Unarchive</button></td>
                                    :
                                    null
                                }
                                    
                                </tr>
                            )
                        })
                    }

                </table>
            </div>
        </div>
    )
}
