const BodyCell = (props: { value: string, keyCell: number }) => {
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

export default BodyCell;