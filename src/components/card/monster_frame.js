import React, {Component} from "react"
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectMonsterSlot} from '../../actions/selectMonsterSlot'

class monsterFrame extends Component {
    constructor(props) {
        super(props)

        this.state = {
            backgroundColor: "transparent",
            isSelected: false,
        }
    }

    static defaultProps = {
        id: null,
        canSelect: true,
    }

    render() {

        let testUrl

        const styleContainer = {
            backgroundColor: this.state.backgroundColor,
            padding: "1%",
        }

        const styleImage = {
            width: "100%",
            opacity: "1.0",
        }

        if (this.props.id === null) {
            testUrl = "https://via.placeholder.com/100"
            styleImage.opacity = "0.0"
        }
        else {
            testUrl = "https://raw.githubusercontent.com/QQChowey/PDC/master/images/portrait/" + this.props.id + ".png"
            styleImage.opacity = "1.0"
        }

        return (
            <div
                style={styleContainer}
                onClick={(this.props.canSelect && !this.state.isSelected) ?
                    () => {
                        this.setState({backgroundColor: "purple"})
                        this.setState({isSelected: true})
                    } : () => {
                        this.setState({backgroundColor: "transparent"})
                        this.setState({isSelected: false})
                    }
                }
            >
                <img style={styleImage} src={testUrl} alt={this.props.id} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}

export default monsterFrame
