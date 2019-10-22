import React from "react"
import MonsterFrame from "../monster_frame"

function teamContainer(props) {


    const flexContainer = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
    }

    const styleTeam = {
        backgroundColor: "pink",
    }

    const styleSubs = {
        padding: "3px",
    }

    return(
        <div style={Object.assign({}, flexContainer, styleTeam)}>
            <MonsterFrame id={props.id[0]}/>
            <div style={Object.assign({}, flexContainer, styleSubs)}>
                <MonsterFrame id={props.id[1]}/>
                <MonsterFrame id={props.id[2]}/>
                <MonsterFrame id={props.id[3]}/>
                <MonsterFrame id={props.id[4]}/>
            </div>
            <MonsterFrame id={props.id[5]}/>
        </div>
    )
}

teamContainer.defaultProps = {id: ["0", "0", "0", "0", "0", "0"]}

export default teamContainer
