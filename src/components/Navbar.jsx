// import React from 'react'
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import AppIcon from "../utils/icon.svg";
import {SearchBar} from './';

const Navbar = () => (
    <Stack direction="row" 
    alignItems="center" 
    p={2} 
    sx={{ position:"sticky", background:"#000", top:0, justifyContent:"space-between"}}
    >
     <Link to="/" style={{display: "flex", alignItems: "center"}}>
       <img src={AppIcon} alt="logo" height="45px" />  
     </Link>
     
     <SearchBar/>
    </Stack>
)

export default Navbar;
