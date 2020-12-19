export default function reducer (state, action) {
    switch (action.type) {
        case "TOOGLE":
            state.modal = !state.modal
            return {...state}
    
        default:
            return state;
    }
}
