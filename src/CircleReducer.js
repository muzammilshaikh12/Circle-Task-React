const CircleReducer = (state, action) => {
    if (action.type === "ADD_TO_CIRCLE") {
        return {
            ...state,
            items:[...action.payload]
        }
    }
}
export default CircleReducer