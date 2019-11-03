import {combineReducers} from 'redux'
import ModeReducer from './reducer_select_mode'
import MonsterListReducer from './reducer_monster_list'
import TeamListReducer from './reducer_team_list'

const allReducers = combineReducers({
    mode: ModeReducer,
    monsterList : MonsterListReducer,
    teamList: TeamListReducer,
})

export default allReducers
