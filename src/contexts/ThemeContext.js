import { createContext, useReducer } from "react";
import ThemeReducers from "../reducers/ThemeReducers";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {



    const [state, dispatch] = useReducer(ThemeReducers, {
        color: "warning",
        mode: "dark"
    })

    const changeColor = (value) => {

        dispatch({ type: "CHANGE_COLOR", payload: value })
    }

    const changeMode = (value) => {
        dispatch({ type: "CHANGE_MODE", payload: value });
    }

    return (
        <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
            {children}
        </ThemeContext.Provider>
    );
}