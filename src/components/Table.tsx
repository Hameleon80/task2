import BodyRow from "./BodyRow";
import HeadTable from "./HeadTable";
import { PrepareDataToArchiveTable } from '../util/helpingFunctions';

function Table(props :{dataObject: {Notes: {header: string[], notes: string[]}, Archive: {header: string[], notes: string[]}} , isArchive: boolean}) {
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
                      PrepareDataToArchiveTable(props.dataObject.Notes.notes, props.dataObject.Archive.notes).map((note)=>{
                            return <BodyRow row={note}/>
                        })
                    :
                    props.dataObject.Notes.notes.map((note)=>{
                        return <BodyRow row={note}/>
                    })
                }
            </tbody>
        </table>
    )
}

export default Table;