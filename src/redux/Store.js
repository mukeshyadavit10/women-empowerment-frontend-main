import traineeReducer from './TraineeSlice';

import { configureStore } from "@reduxjs/toolkit";

console.log('store');
const store = configureStore(
    {
        reducer: {
            trainee: traineeReducer,
            
        }
    }
);

export default store;