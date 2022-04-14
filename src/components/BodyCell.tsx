const BodyCell = (props: { value: string }) => {
    let regex = '#icons';
    if (props.value.includes(regex)) {
        return (
            <td>
                <div className="hideText div-icon">
                    <a href=' ' className="App-link pr-2"><i className="fa-solid fa-pen"></i></a>
                    <a href=' ' className="App-link pr-2"><i className="fa-solid fa-box"></i></a>
                    <a href=' ' className="App-link pr-2"><i className="fa-solid fa-trash"></i></a>
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