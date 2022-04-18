import BodyRow from "./BodyRow";
import HeadTable from "./HeadTable";
import { PrepareDataToArchiveTable } from '../util/helpingFunctions';

function Table(props :{dataObject: 
    {Notes: {header: string[], notes: string[]}, Archive: {header: string[], notes: string[]}} , 
    isArchive: boolean, setChanget: Function, isChanget: boolean, setActiveModal: Function,
    setModalName: Function, setIsEdit: Function, setKeyToEditNote: Function, setModalCategory: Function, setModalText:Function})
    {

    return (
        <table>
            <thead>
                {
                    props.isArchive 
                    ?
                        <HeadTable data={props.dataObject.Archive.header} />
                    :
                        <HeadTable data={props.dataObject.Notes.header} />
                }
            </thead>
            <tbody>
                {
                    props.isArchive
                    ? 
                        PrepareDataToArchiveTable(props.dataObject.Notes.notes, props.dataObject.Archive.notes).map((note, index)=>{
                            return <BodyRow row={note} keyRow={index} isArchive={props.isArchive} 
                                    setChanget={props.setChanget} isChanget={props.isChanget} setModalCategory={props.setModalCategory}
                                    setActiveModal={props.setActiveModal} setModalName={props.setModalName} setModalText={props.setModalText}
                                    setIsEdit={props.setIsEdit} setKeyToEditNote={props.setKeyToEditNote}/>
                        })
                    :
                        props.dataObject.Notes.notes.map((note, index)=>{
                            return <BodyRow row={note} keyRow={index} isArchive={props.isArchive} 
                                    setChanget={props.setChanget} isChanget={props.isChanget} setModalCategory= {props.setModalCategory}
                                    setActiveModal={props.setActiveModal} setModalName={props.setModalName} setModalText={props.setModalText}
                                    setIsEdit={props.setIsEdit} setKeyToEditNote={props.setKeyToEditNote}/>
                        })
                }
            </tbody>
        </table>
    )
}

export default Table;