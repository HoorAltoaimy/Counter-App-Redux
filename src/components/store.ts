import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import counterSlice from './counterSlice';


export type RootState = {
    counterR: ReturnType<typeof counterSlice>;
}

export const store = configureStore({
    reducer: {
        counterR: counterReducer,
    },
});
