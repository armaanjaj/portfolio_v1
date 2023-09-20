import { combineReducers } from "redux";
import nightModeReducer from "./nightModeReducer";

const reducers = combineReducers({
    darkMode: nightModeReducer,
})

export default reducers;