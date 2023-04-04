import { createSlice } from "@reduxjs/toolkit";
import { FaGlobe, FaEnvelope,FaPhone, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

const personalInfoSlice = createSlice({
    name:'personalInfo',
    initialState:{
           infoData:[
                {
                    id: '1',
                    txt: 'Yerevan, Armenia',
                    emoji: <FaGlobe/>
                },
                {
                    id:'2',
                    txt: 'nellyghazaryan55@gmail.com',
                    emoji:<FaEnvelope/>
                },
                {
                    id: '3',
                    txt:'(+374)93-75-63-27',
                    emoji: <FaPhone/>

                }
                
           ],
           socials:[
                {
                    id:new Date().getTime().toString(),
                    fullName: 'Nelly Ghazaryan',
                    position: 'Frontend Developer',
                    links:[
                        {
                            id:'1',
                            link:'https://github.com/NellyGh',
                            icon: <FaGithub/>
                        },
                        {
                            id:'2',
                            link:'https://linkedin.com/in/nelly-ghazaryan-60251286',
                            icon: <FaLinkedin/>
                        },
                        {
                            id:'3',
                            link:'https://t.me/NellyGh0590',
                            icon: <FaTelegram/>
                        },
                        

                    ]
                }
           ]
           
        },
    reducers:{}
})


export const selectPersonalInfo = state => state.personalInfo
export const personalInfoReducer = personalInfoSlice.reducer