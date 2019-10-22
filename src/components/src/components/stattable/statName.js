import React from "react"

function statName(props) {

    return (
        <div>
            Name: {props.name}
        </div>
    )
}

statName.defaultProps = {
    id: "0",
    name: "Enter a name...",

}

export default statTableContainer
