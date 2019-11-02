export default function(state = "1P", action) {
    switch(action.type) {
        case "MODE_SELECTED":
            return action.payload
        default:
            break
    }
    return state
}
