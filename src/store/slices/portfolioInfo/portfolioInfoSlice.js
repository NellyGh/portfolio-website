import { createSlice } from "@reduxjs/toolkit";
import portfolioImages from "../../../Images/portfolioImg";

const portfolioInfoSlice = createSlice({
    name:'portfolioInfo',
    initialState:{
        portfolioData:[
            {
                id:'1',
                img: `${portfolioImages.calculator}`,
                name:'Calculator',
                linkCode:'https://github.com/NellyGh/Calculator',
                linkDemo:'https://nellygh.github.io/Calculator/',
                
            },
            {
                id:'2',
                img: `${portfolioImages.timer}`,
                name:'Countdown Timer',
                linkCode:'https://github.com/NellyGh/CountDown_Timer',
                linkDemo:'https://nellygh.github.io/CountDown_Timer/',
                 
            },
            {
                id:'3',
                img: `${portfolioImages.insta}`,
                name:'Instagram Clone',
                linkCode:'https://github.com/NellyGh/instagram-app',
                linkDemo:'https://nellygh.github.io/instagram-app/',
               
            },
            {
                id:'4',
                img: `${portfolioImages.game}`,
                name:'Tic-Tac-Toe Game',
                linkCode:'https://github.com/NellyGh/Tic_Tac_Toe_Game',
                linkDemo:'https://nellygh.github.io/Tic_Tac_Toe_Game/',
                
            }
        ]
    },
    reducers:{}
})

export const selectPortfolioInfo = state => state.portfolioInfo
export const portfolioInfoReducer = portfolioInfoSlice.reducer