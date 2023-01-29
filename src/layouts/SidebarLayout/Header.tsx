import { FC } from "react";


//MUI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
//images
import Logo from "../../assets/images/logo.png";

import { useAppDispatch } from '../../store/store';
import { useAppSelector } from "../../store/store";

//actions
import { resetLogin, login } from '../../store/auth/auth-slice';

const pages = ['Products', 'Pricing', 'Blog'];

const Header: FC = () => {
    const dispatch = useAppDispatch();
    const { isLoggedIn } = useAppSelector(state => state.auth);

    const handleLogout = () => {
        dispatch(resetLogin())
    };

    const handleLogin = () => {
        dispatch(login({ username: '1234', password: 'Password@123' }))
    }

    return (
        <AppBar position="static" color="transparent"> 
            <Container maxWidth="md">
                <Toolbar disableGutters>
                    <Box>
                        {/* <Box component="img" src={Logo} alt="" sx={{ width: '100px' }} /> */}
                        Logo
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;