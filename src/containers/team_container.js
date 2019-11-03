import React, {Component} from "react"
import {connect} from 'react-redux'
import MonsterFrame from "../components/card/monster_frame"

class TeamContainer extends Component {

    static defaultProps = {

    }

    // refer to reducer_team_list.js for json format
    createMonsterItem(team = 0, slot = 0, flag = false) {
        if (flag) return (
            <MonsterFrame
                key={this.props.teamSlot[team][slot].key}
                canSelect={false}
            />
        )
        return (
            <MonsterFrame
                key={this.props.teamSlot[team][slot].key}
                id={this.props.teamSlot[team][slot].card_id}
                canSelect={true}
            />
        )
    }

    createTeamItem(team = 0) {
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

        const monsterItemList = [
            this.createMonsterItem(team, 0),
            this.createMonsterItem(team, 1),
            this.createMonsterItem(team, 2),
            this.createMonsterItem(team, 3),
            this.createMonsterItem(team, 4),
            this.createMonsterItem(team, 5),
        ]

        return (
            <div style={styleTeam}>
                {monsterItemList[0]}
                <div style={styleSubs}>
                    {monsterItemList[1]}
                    {monsterItemList[2]}
                    {monsterItemList[3]}
                    {monsterItemList[4]}
                </div>
                {monsterItemList[5]}
            </div>
        )
    }

    createCoopTeamItem(team1 = 0, team2 = 1) {
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
            <div>
                <div style={styleTeam}>
                    {this.createMonsterItem(team1, 0)}
                    <div style={styleSubs}>
                        {this.createMonsterItem(team1, 1)}
                        {this.createMonsterItem(team1, 2)}
                        {this.createMonsterItem(team1, 3)}
                        {this.createMonsterItem(team1, 4)}
                    </div>
                    {this.createMonsterItem(team1, 5, true)}
                </div>
                <div style={styleTeam}>
                    {this.createMonsterItem(team2, 5, true)}
                    <div style={styleSubs}>
                        {this.createMonsterItem(team2, 1)}
                        {this.createMonsterItem(team2, 2)}
                        {this.createMonsterItem(team2, 3)}
                        {this.createMonsterItem(team2, 4)}
                    </div>
                    {this.createMonsterItem(team1, 0)}
                </div>
            </div>
        )
    }

    render() {
        const p1 = this.createTeamItem(0)
        const p2 = this.createTeamItem(1)
        const p3 = this.createTeamItem(2)

        const coop = this.createCoopTeamItem(0, 1)

        if (this.props.mode === "1P") {
            return (
                <div>
                    {p1}
                </div>
            )
        }
        else if (this.props.mode === "2P") {
            return (
                <div>
                    {coop}
                </div>
            )
        }
        else if (this.props.mode === "3P") {
            return (
                <div>
                    {p1}
                    {p2}
                    {p3}
                </div>
            )
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
