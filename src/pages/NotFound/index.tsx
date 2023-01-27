import { FC } from "react";
import { Helmet } from 'react-helmet-async';

//MUI
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

//images
import notFoundImage from "../../assets/images/404.svg";


const MainContent = styled(Box)(
    ({ theme }) => `
      height: 100%;
      display: flex;
      flex: 1;
      overflow: auto;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  `
  );

const NotFound:FC = () => {
    return (
        <>
            <Helmet>
                <title>Status - 404</title>
            </Helmet>
            <MainContent>
                <Container maxWidth="md">
                    <Box textAlign="center">
                     <img alt="404" height={180} src={notFoundImage} />
                    </Box>
                </Container>
            </MainContent>
        </>
    )
};

export default NotFound;