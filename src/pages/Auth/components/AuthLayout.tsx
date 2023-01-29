
import { FC } from 'react';

//MUI
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

//images
import AuthBg from "../../../assets/images/desk.jpg";

interface AuthInterface {
    children: React.ReactNode,
    bottomLinks: React.ReactNode
}

const AuthLayout:FC<AuthInterface> = ({children, bottomLinks}) => {
  return (
    <Box sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }}>
        <Container maxWidth="xl">
            <Grid container spacing={2}>
                <Grid item xs={11}>
                    <Card variant="outlined" >
                        <CardContent sx={{padding:0, paddingBottom:'0!important'}}>
                            <Grid container spacing={0}>
                            <Grid item lg={6} sx={{padding: '2rem'}}>
                                {children}
                            </Grid>
                            <Grid item lg={6}>
                                <Box 
                                    sx={{ height: '100%', position: 'relative', backgroundImage: `url(${AuthBg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                                    <Box className="overlay" 
                                        sx={{ 
                                            position: 'absolute',
                                            left: 0,
                                            top: 0,
                                            width: '100%',
                                            height: '100%',
                                            background: "rgba(0,0,0,0.5)"
                                        }} />
                                    <Box 
                                        sx={{
                                            position: 'absolute',
                                            left: 0,
                                            bottom: '3rem',
                                            right: 0,
                                            color: 'white.main',
                                            px: 4,
                                            textAlign: 'center'
                                        }}
                                        >
                                        <Typography variant="subtitle1" component="p" mb={1}>
                                            A Complete Digital Service Platform.
                                        </Typography>
                                        <Typography variant="subtitle2" component="p" sx={{fontSize: '0.825rem'}}>- Kiranti</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    {bottomLinks}
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default AuthLayout