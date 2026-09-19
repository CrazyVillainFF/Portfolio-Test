import{useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import {Typography, Button, TextField, Box} from '@mui/material'

const login= () => {
    const navigate = useNavigate();

    return(
        <div id="center">
            {/*<Box sx={{mt:2}}>
            <Button variant="outlined" onClick={() => setCount(count + 1)} disabled={count >= 10}>
                Count {}
            </Button>
            </Box>*/}
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

            
                {/*<input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <button onClick={handleLogin}>Login</button>
                <p>You Don't Have Account? <button onClick={() => navigate('/register')} >Register</button></p> */}
            
        </div>
    );
};

export default login;