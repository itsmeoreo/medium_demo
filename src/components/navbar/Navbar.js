import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import AppleIcon from '@mui/icons-material/Apple';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <AppleIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SODIUM
          </Typography>
          <Button style={{
            fontSize:'x-small',
            padding:'0.5% 1% 0.5% 1%',
            borderStartEndRadius: '15% 50%',
            borderEndEndRadius: '15% 50%',
            borderTopLeftRadius: '15% 50%',
            borderBottomLeftRadius: '15% 50%'
            }} color="inherit">Our story</Button>
          <Button style={{
            fontSize:'x-small',
            padding:'0.5% 1% 0.5% 1%',
            borderStartEndRadius: '15% 50%',
            borderEndEndRadius: '15% 50%',
            borderTopLeftRadius: '15% 50%',
            borderBottomLeftRadius: '15% 50%'
          }} color="inherit">Membership</Button>
          <Button style={{
            fontSize:'x-small',
            padding:'0.5% 1% 0.5% 1%',
            borderStartEndRadius: '25% 50%',
            borderEndEndRadius: '25% 50%',
            borderTopLeftRadius: '25% 50%',
            borderBottomLeftRadius: '25% 50%'
            }} color="inherit">Write</Button>
          <Button style={{
            fontSize:'x-small',
            padding:'0.5% 1% 0.5% 1%',
            borderStartEndRadius: '25% 50%',
            borderEndEndRadius: '25% 50%',
            borderTopLeftRadius: '25% 50%',
            borderBottomLeftRadius: '25% 50%'
            }} color="inherit"><Link style={{textDecoration:'none', color: 'inherit'}} to='/login'>Sign in</Link>
            </Button>
            <Button style={{
              fontSize:'x-small',
              padding:'0.5% 1% 0.5% 1%',
              borderStartEndRadius: '15% 50%',
              borderEndEndRadius: '15% 50%',
              borderTopLeftRadius: '15% 50%',
              borderBottomLeftRadius: '15% 50%'
              }} color="inherit">
                <NavLink style={{textDecoration:'none', color:'inherit'}} to='/register'>Get Started</NavLink>
              </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function RegisterAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className='register-form-appbar' position="static">
        <Toolbar>
          <AppleIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography variant="h6" component="div" sx={{textAlign:'left', flexGrow: 1 }}>
            SODIUM
          </Typography>
          <Button style={{
            fontSize:'x-small',
            padding:'0.5% 1% 0.5% 1%',
            borderStartEndRadius: '25% 50%',
            borderEndEndRadius: '25% 50%',
            borderTopLeftRadius: '25% 50%',
            borderBottomLeftRadius: '25% 50%'
            }} color="inherit"><Link style={{textDecoration:'none', color: 'inherit'}} to='/login'>Sign in</Link>
          </Button>
          <Button style={{
            fontSize:'x-small',
            padding:'0.5% 1% 0.5% 1%',
            borderStartEndRadius: '25% 50%',
            borderEndEndRadius: '25% 50%',
            borderTopLeftRadius: '25% 50%',
            borderBottomLeftRadius: '25% 50%'
            }} color="inherit"><Link style={{textDecoration:'none', color: 'inherit'}} to='/'>Home</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function LoginAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className='login-form-appbar' position="static">
        <Toolbar>
          <AppleIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography variant="h6" component="div" sx={{textAlign:'left', flexGrow: 1 }}>
            SODIUM
          </Typography>
          <Button style={{
            fontSize:'x-small',
            padding:'0.5% 1% 0.5% 1%',
            borderStartEndRadius: '25% 50%',
            borderEndEndRadius: '25% 50%',
            borderTopLeftRadius: '25% 50%',
            borderBottomLeftRadius: '25% 50%'
            }} color="inherit"><Link style={{textDecoration:'none', color: 'inherit'}} to='/register'>Sign up</Link>
          </Button>
          <Button style={{
            fontSize:'x-small',
            padding:'0.5% 1% 0.5% 1%',
            borderStartEndRadius: '25% 50%',
            borderEndEndRadius: '25% 50%',
            borderTopLeftRadius: '25% 50%',
            borderBottomLeftRadius: '25% 50%'
            }} color="inherit"><Link style={{textDecoration:'none', color: 'inherit'}} to='/'>Home</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
function StoryAppBar(){
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className='story-appbar' position="static">
        <Toolbar>
          <AppleIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography variant="h6" component="div" sx={{textAlign:'left', flexGrow: 1 }}>
            SODIUM
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Button style={{
            fontSize:'x-small',
            padding:'0.5% 1% 0.5% 1%',
            borderStartEndRadius: '25% 50%',
            borderEndEndRadius: '25% 50%',
            borderTopLeftRadius: '25% 50%',
            borderBottomLeftRadius: '25% 50%'
            }} color="inherit"><Link style={{textDecoration:'none', color: 'inherit'}} to='/register'>Sign up</Link>
          </Button>
          <Button style={{
            fontSize:'x-small',
            padding:'0.5% 1% 0.5% 1%',
            borderStartEndRadius: '25% 50%',
            borderEndEndRadius: '25% 50%',
            borderTopLeftRadius: '25% 50%',
            borderBottomLeftRadius: '25% 50%'
            }} color="inherit"><Link style={{textDecoration:'none', color: 'inherit'}} to='/'>Home</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export {ButtonAppBar, RegisterAppBar, LoginAppBar, StoryAppBar}