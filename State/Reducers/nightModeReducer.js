const reducer = (
    state = {
        bg: "#242525",
        text: "#ffffff"
    },
    action
) => {
    if (action.payload === true) {
        return {
            bg: "#242525",
            text: "#ffffff"
        };
    } else if (action.payload === false) {
        return {
            bg: "#ffffff",
            text: "#000000"
        };
    } else {
        return state;
    }
};

export default reducer;
