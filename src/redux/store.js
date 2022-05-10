import { configureStore } from "@reduxjs/toolkit";
import LaunceReducer from './features/launceDataSlice'

export default configureStore({
    reducer: {
        launce: LaunceReducer
    }
})