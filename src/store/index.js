import { configureStore } from "@reduxjs/toolkit";

const reducerFn = (state = { counter: 0 }, action) => {
    switch (action.type) {
        case "INC":
            return ({ counter: state.counter + 1 });
        case "DEC":
            return ({ counter: state.counter - 1 });
        default:
            return state;
    }
};

export const store = configureStore({ reducer: { reducerFn } });