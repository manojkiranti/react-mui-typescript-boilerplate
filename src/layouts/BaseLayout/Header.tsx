import { FC } from "react";


//MUI
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { useAppDispatch } from '../../store/store';
import { useAppSelector } from "../../store/store";
//actions
import { resetLogin } from '../../store/auth/auth-slice';

const Header:FC = () => {
    const dispatch = useAppDispatch();
    const {isLoggedIn} = useAppSelector(state =>state.auth);

    const handleLogout = () => {
        dispatch(resetLogin())
    };

    const handleLogin = () => {
        
    }

    return(
        <Box>
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Typography variant="h1">
                                Header
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        {!isLoggedIn && <Button onClick={handleLogin}>Login</Button>}
                        {isLoggedIn && <Button onClick={handleLogout}>Logout</Button>}
                    </Grid>
                </Grid>
            </Container>            
        </Box>
    )
}

export default Header;