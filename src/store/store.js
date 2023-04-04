import { configureStore } from "@reduxjs/toolkit";
import { aboutInfoReducer } from "./slices/aboutInfo/aboutInfoSlice";
import { personalInfoReducer } from "./slices/personalInfo/personalInfoSlice";
import { portfolioInfoReducer } from "./slices/portfolioInfo/portfolioInfoSlice";


const store = configureStore({
    reducer: {
        personalInfo: personalInfoReducer,
        aboutInfo: aboutInfoReducer,
        portfolioInfo: portfolioInfoReducer
    }
})

export default store