import React from "react"

function monsterFrame(props) {

    let imgUrl = "https://via.placeholder.com/100"

    const styleContainer = {
        "display": "flex",
        "background-color": "lightblue",
    }

    const styleImage = {
        "margin": "3px",
        "width": "100%",
    }

    if (!props.id) {
        // imgUrl = "https://raw.githubusercontent.com/QQChowey/PDC/master/images/portrait/1.png"
        styleImage.opacity = "1.0"
    }
    else {
        // imgUrl = "https://raw.githubusercontent.com/QQChowey/PDC/master/images/portrait/1.png"
        styleImage.opacity = "0.0"
    }

    return (
        <div style={styleContainer}>
            <img style={styleImage} src={imgUrl} alt={props.id}/>
        </div>
    )
}

export default monsterFrame
