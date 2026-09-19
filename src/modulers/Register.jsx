import{useNavigate} from 'react-router-dom'
import {TextField, Typography, Button, Box} from '@mui/material'
const Register = () =>{
    const navigate =useNavigate()
    return(
        <div id="center">
            <h2>Register</h2>
            <Box sx={{mt:2}}>
            <TextField variant='outlined' label="Username" placeholder='Enter Your Username'/>
            </Box>
            <Box sx={{mt:2}}>
            <TextField variant='outlined' label="Email" placeholder='example@gmail.com'/>
            </Box>
            <Box sx={{mt:2}}>
            <TextField type="password" variant='outlined' label="Password" placeholder='Pass****'/>
            </Box>
            <Box sx={{mt:2}}>
            <TextField type='password' variant='outlined' label="Confirm Password" placeholder='Pass****'/>
            </Box>
            <Box sx={{mt:1, ml:-21.5}}>
                <Button size='small' href='.//'>Help?</Button>
            </Box>
            <Button sx={{mt:-1}} variant='contained'>Register</Button>
            <Typography sx={{mt:4}}>You already have account? <Button variant='text' onClick={() =>navigate('/')}>Login</Button></Typography>
            {/*<form>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <button type="submit">Register</button>
                <p>You already have account?<button onClick={() => navigate('/')}>Login</button></p>
            </form>*/}
        </div>
    )
}

export default Register;