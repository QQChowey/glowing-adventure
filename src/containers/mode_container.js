import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import styles from './mode_container.module.css'
import {selectMode} from '../actions/selectMode'

class ModeContainer extends Component {

    render() {
        return (
            <div style={styles}>
                <select onChange={(e) => {
                    console.log(e.target.value)
                    this.props.selectMode(e.target.value)
                }}>
                    <option value="1P">1P</option>
                    <option value="2P">2P</option>
                    <option value="3P">3P</option>
                </select>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        mode: state.mode
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectMode: selectMode}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ModeContainer)
