import {AppBar, Box, Typography, TextField, Button, IconButton, Toolbar, Card, CardContent} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import {ThemeProvider} from '@mui/material/styles';


const Home=() =>{
    const navigate =useNavigate()
    return(
    <>
    {/* navigation bar */}
    <Box sx={{flexGrow:0}}>
        <AppBar position='static'>
            <Toolbar>
                <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'
                sx={{mr:2}}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant='h6' component="div" sx={{flexGrow: 1}}>
                    Home
                </Typography>
                <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
            </Toolbar>
        </AppBar>
    </Box>
    {/*<ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#d5dde6',
            dark: '#c1cedb',
          },
        },
      }}
    >*/}
    <Box
        sx={{ mt:2,
          width: 965.8,
          height: 300,
          borderRadius: 1,
          bgcolor: '#fdfdfe' ,
          p:1
        }}>
        
            <p class="myself">Hello Everyone, Iam Vishnu</p>
            
        </Box>
        <Card sx={{maxWidth:345,p:1}}>
            <CardContent>
                <Typography variant='h6' fontWeight='bold'>
                    Hello Everyone, Iam Vishnu
                </Typography>
                <Typography variant='caption' color='text.secondary'>
                    Welcome to My Profile
                </Typography>
                <Typography variant='boby2' sx={{mt:1}}>
                     This is My Project(Portfolio)
                </Typography>
            </CardContent>
        </Card>
        
        
    </>
    )
};

export default Home;