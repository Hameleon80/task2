import BodyCell from "./BodyCell";

const BodyRow = (props: { row: string, key: number}) => {
    const str = props.row.split('|');
    return (
        <tr className="row">
            {
                str.map((data, key) => {
                    return (
                        <BodyCell value={data} key={key}/>
                    )
                })
            }
        </tr>
    )
}

export default BodyRow;