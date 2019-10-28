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

    if (!props.monsId) {
        testUrl = "https://via.placeholder.com/100"
        styleImage.opacity = "0.0"
    }
    else {
        testUrl = "https://raw.githubusercontent.com/QQChowey/PDC/master/images/portrait/" + props.monsId + ".png"
        styleImage.opacity = "1.0"
    }

    return (
        <div style={styleContainer} onClick={props.canClick ? () => changeBGColor() : null}>
            <img style={styleImage} src={testUrl} alt={props.monsId} />
        </div>
    )
}

monsterFrame.defaultProps = {monsId: null, canClick: true}

export default monsterFrame
