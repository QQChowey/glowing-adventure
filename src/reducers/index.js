import {combineReducers} from 'redux'
import ModeReducer from './reducer_select_mode'
import TeamListReducer from './reducer_team_list'

const allReducers = combineReducers({
    mode: ModeReducer,
    teamList: TeamListReducer,
})

export default allReducers
