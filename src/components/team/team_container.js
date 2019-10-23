import React from "react"
import MonsterFrame from "../monster_frame"

function teamContainer(props) {

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
                mons_id={props.mons_id[0]}
                onClick={() => this.console.log(this.props)}
            />
            <div style={Object.assign({}, flexContainer, styleSubs)}>
                <MonsterFrame mons_id={props.mons_id[1]}/>
                <MonsterFrame mons_id={props.mons_id[2]}/>
                <MonsterFrame mons_id={props.mons_id[3]}/>
                <MonsterFrame mons_id={props.mons_id[4]}/>
            </div>
            <MonsterFrame mons_id={props.mons_id[5]}/>
        </div>
    )

}

teamContainer.defaultProps = {mons_id: []}

export default teamContainer
