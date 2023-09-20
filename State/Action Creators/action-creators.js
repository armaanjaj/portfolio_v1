export const darkMode = (mode) => {
    return (dispatch) => {
        dispatch({
            type: "darkMode",
            payload: mode,
        });
    };
};