
import { FC } from 'react';

//MUI
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

interface AuthInterface {
    children: React.ReactNode,
    bottomLinks: React.ReactNode
}

const AuthLayout:FC<AuthInterface> = ({children, bottomLinks}) => {
  return (
    <Box>
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
                                <div className="auth-page-sidebar">
                                <div className="overlay"></div>
                                <div className="auth-user-testimonial">
                                    <p className="lead">
                                      A Complete Digital Service Platform.
                                    </p>
                                    <p>- Kiranti</p>
                                </div>
                                </div>
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