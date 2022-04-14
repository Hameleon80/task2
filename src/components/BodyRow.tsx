import BodyCell from "./BodyCell";

const BodyRow = (props: { row: string }) => {
    const str = props.row.split('|');
    return (
        <tr className="row">
            {
                str.map((data) => {
                    return (
                        <BodyCell value={data} />
                    )
                })
            }
        </tr>
    )
}

export default BodyRow;