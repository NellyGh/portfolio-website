import { createSlice } from "@reduxjs/toolkit";
import { FaBook,  FaChess, FaGuitar, FaLanguage} from "react-icons/fa";


const aboutInfoSlice = createSlice({
    name:'aboutInfo',
    initialState:{
        skills:[
                {
                    id:'1',
                    skill:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" 
                }, 
                {
                    id:'2',
                    skill:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
                },
                {
                    id:'3',
                    skill: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                },
                {
                    id:'4',
                    skill: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                },
                {
                    id:'5',
                    skill:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
                },
                {
                    id:'6',
                    skill: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gulp/gulp-plain.svg"
                },
                {
                    id:'7',
                    skill:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                },
                {
                    id:'8',
                    skill: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg"
                },
                {
                    id:'9',
                    skill: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                },
                {
                    id:'10',
                    skill:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                }


            ],
        hobbies: [
            {
                id:'1',
                hobbie: <FaGuitar/>,
                txt:'Playing Guitar'
            },
            {
                id:'2',
                hobbie: <FaLanguage/>,
                txt:'Learning Languages'
            },
            {
                id:'3',
                hobbie: <FaChess/>,
                txt: 'Chess'
            },
            {
                id:'4',
                hobbie: <FaBook/>,
                txt:'Reading'
            }
        ]
    },
    reducers:{}
})

export const selectAboutInfo = state => state.aboutInfo
export const aboutInfoReducer = aboutInfoSlice.reducer