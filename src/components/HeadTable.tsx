import React from "react";

function Head(props: { data: string[]; }) {
    return (
        <tr>
            {props.data.map((value) => {
                return (
                <th>
                    <div>
                        {value}
                    </div>
                </th>);
            })}
        </tr>

    )
}

export default Head;