
import {configureStore} from "@reduxjs/toolkit"
import shoeReducer from './itemSlice'


const shoeStore = configureStore({
    reducer:{
        shoe :shoeReducer,
    },
});

export default shoeStore;