import React from "react"
import MonsterFrame from "../monster-frame"

function teamContainer() {

    const styleFlexContainer = {
        display: "flex",
        // alignItems: "center",
        // justifyContent: "space-between",
    }

    const styleContainer = {
        backgroundColor: "pink",
    }

    const styleSubContainer = {
        padding: "0 3vw 0 3vw"
    }

    const styleDivider = {
        borderLeft: "1px solid black",
        width: "5px",
    }

    return (
        <div style={Object.assign({}, styleFlexContainer, styleContainer)}>
            <MonsterFrame />
            <div style={styleDivider} />
            <div style ={Object.assign({}, styleFlexContainer, styleSubContainer)}>
                <MonsterFrame />
                <MonsterFrame />
                <MonsterFrame />
                <MonsterFrame id="0"/>
            </div>
            <div style={styleDivider} />
            <MonsterFrame />
        </div>

    )

}

export default teamContainer
