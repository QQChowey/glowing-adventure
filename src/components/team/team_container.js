import React from "react"
import MonsterFrame from "../monster_frame"

function teamContainer(props) {

    function handleClick() {
        console.log("clicked")
    }

    const flexContainer = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        maxWidth: "600px",
    }

    const styleTeam = {
        backgroundColor: "pink",
    }

    const styleSubs = {
        padding: "3px",
    }

    return (
        <div style={Object.assign({}, flexContainer, styleTeam)}>
            <MonsterFrame
                monsId={props.monsId[0]}
                canClick={true}
            />
            <div style={Object.assign({}, flexContainer, styleSubs)}>
                <MonsterFrame monsId={props.monsId[1]}/>
                <MonsterFrame monsId={props.monsId[2]}/>
                <MonsterFrame monsId={props.monsId[3]}/>
                <MonsterFrame monsId={props.monsId[4]}/>
            </div>
            <MonsterFrame monsId={props.monsId[5]}/>
        </div>
    )

}

teamContainer.defaultProps = {monsId: []}

export default teamContainer
