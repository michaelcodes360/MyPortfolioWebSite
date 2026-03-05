// redux-toolkit referesher

import {configureStore} from "reduxjs/toolkit"
import counterReducer from '../features/counter/CounterSlice'

export const store = configureStore ({
    reducers: {
        counter: counterReducer
    }
})