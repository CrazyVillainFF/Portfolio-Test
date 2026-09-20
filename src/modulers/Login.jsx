import{useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import {Typography, Button, TextField, Box, AppBar, IconButton, Toolbar} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home';

const login= () => {
    const navigate = useNavigate();

    return(
    <>
        <Box sx={{flexGrow:0}}>
        <AppBar position='static'>
            <Toolbar>
                <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'
                sx={{mr:2}}>
                    <HomeIcon onClick={()=> navigate('/home')}/>
                </IconButton>
                <Typography variant='h6' component="div" sx={{flexGrow: 1}}>
                    Login
                </Typography>
                <Button color="inherit" onClick={() => navigate('/register')}>Register</Button>
            </Toolbar>
        </AppBar>
    </Box>


        <div id="center">
            <h2>Login</h2>
            <Box sx={{mt:1}}>
            <TextField variant='outlined' label="Email" placeholder='example@gmail.com'/>
            </Box>
            <Box sx={{mt:1}}>
            <TextField type="password" variant='outlined' label="Password" placeholder='Pass****'/>
            </Box>
            <Box sx={{mt:1, ml:-8.5, mb:1}}>
            <Button size="small" href="./register">Forget password?</Button>
            </Box>
            <Button sx={{mt:1 , ml:0}} variant='contained'>Login</Button>
            <Typography sx={{mt:24}}>You Don't have account? <Button variant='text' onClick={() =>navigate('/register')}>Register</Button></Typography>

        </div>
        </>
    );
};

export default login;