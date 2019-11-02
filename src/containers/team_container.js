import React, {Component} from "react"
import {connect} from 'react-redux'
import MonsterFrame from "../components/card/monster_frame"

class TeamContainer extends Component {

    static defaultProps = {

    }

    // refer to reducer_team_list.js for json format
    createMonsterItem(team, slot) {
        return (
            <MonsterFrame
                key={this.props.teamSlot[team][slot].id}
                card_id={this.props.teamSlot[team][slot].card_id}
                canClick={this.props.teamSlot[team][slot].canClick}
            />
        )
    }

    createTeamItem(team) {
        const styleTeam = {
            backgroundColor: "pink",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            maxWidth: "600px",
        }

        const styleSubs = {
            padding: "3px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
        }

        return (
            <div style={styleTeam}>
                {this.createMonsterItem(team, 0)}
                <div style={styleSubs}>
                    {this.createMonsterItem(team, 1)}
                    {this.createMonsterItem(team, 2)}
                    {this.createMonsterItem(team, 3)}
                    {this.createMonsterItem(team, 4)}
                </div>
                {this.createMonsterItem(team, 5)}
            </div>
        )
    }

    render() {
        const p1 = this.createTeamItem(0)
        const p2 = this.createTeamItem(1)
        const p3 = this.createTeamItem(2)

        if (this.props.mode === "1P") {
            p2.styleTeam.display = "none"
            p3.styleTeam.display = "none"
        }

        return (
            <div>
                {p1}
                {p2}
                {p3}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        teamSlot: state.teamList,
        mode: state.mode,
    }
}

export default connect(mapStateToProps)(TeamContainer)
