import React from "react"

function monsterFrame(props) {
    let testUrl

    const styleContainer = {
        backgroundColor: "none",
        padding: "1%",
    }

    const styleImage = {
        width: "100%",
        opacity: "1.0",
    }

    if (!props.mons_id) {
        testUrl = "https://via.placeholder.com/100"
        styleImage.opacity = "0.0"

    }
    else {
        testUrl = "https://raw.githubusercontent.com/QQChowey/PDC/master/images/portrait/" + props.mons_id + ".png"
        styleImage.opacity = "1.0"
    }

    return (
        <div style={styleContainer}>
            <img style={styleImage} src={testUrl} alt={props.mons_id} />
        </div>
    )
}

monsterFrame.defaultProps = "0"

export default monsterFrame
