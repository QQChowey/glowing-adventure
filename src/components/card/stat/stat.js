import React from 'react'

function stat() {
    const styleContainer = {
        backgroundColor: "lightblue",
        maxWidth: "600px",
    }
    return(
        <div style={styleContainer}>
            <div>
                HP:  <input />
            </div>
            <div>
                ATK: <input />
            </div>
            <div>
                RCV: <input />
            </div>
        </div>
    )
}

export default stat
