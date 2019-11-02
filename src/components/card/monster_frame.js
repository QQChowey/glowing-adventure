import React, {Component} from "react"

class monsterFrame extends Component {
    constructor(props) {
        super(props)

        this.state = {
            backgroundColor: "none",
            padding: "1%",
        }
    }

    static defaultProps = {
        card_id: null,
        canClick: false,
    }

    render() {

        let testUrl
        const styleImage = {
            width: "100%",
            opacity: "1.0",
        }

        if (!this.props.card_id) {
            testUrl = "https://via.placeholder.com/100"
            styleImage.opacity = "0.0"
        }
        else {
            testUrl = "https://raw.githubusercontent.com/QQChowey/PDC/master/images/portrait/" + this.props.card_id + ".png"
            styleImage.opacity = "1.0"
        }

        return (
            <div
                style={this.state}
                onClick={this.props.canClick ?
                    () => {this.setState({backgroundColor: "blue"})}
                    : null
                }
            >
                <img style={styleImage} src={testUrl} alt={this.props.card_id} />
            </div>
        )
    }
}

export default monsterFrame
