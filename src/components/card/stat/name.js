import React from 'react'
import Data from '../../../reducers/reducer_monster_list'
import {connect} from 'react-redux'

function Name(props) {
    const styleContainer = {
        backgroundColor: "lightblue",
        maxWidth: "600px",
    }

    const listNames = props.monsterList.map((monster) => {
        return (
            <option
                key={"id/name" + monster["card_id"] + monster["name"]}
                value={monster["card_id"] + ". " + monster["name"]}
            >
            </option>
        )
    })

    return (
        <div style={styleContainer}>
            <label>ID / Name:
                <input list="names" />
            </label>
            <datalist id="names">
                {listNames}
            </datalist>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        monsterList: state.monsterList
    }
}

export default connect(mapStateToProps)(Name)
