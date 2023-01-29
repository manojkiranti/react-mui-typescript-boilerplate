import  { FC, ReactNode } from "react";
import { Outlet } from 'react-router-dom';

//MUI
import { Box } from '@mui/material';

//components
import Header from "./Header";
import Footer from "./Footer";

interface BaseLayout {
    children?: ReactNode;
}

const BaseLayout: FC<BaseLayout> = ({ children }) => {
    return (
        <Box
            sx={{
                flex: 1,
                height: '100%'
            }}
        >
            <Header />
            {children || <Outlet />}
            <Footer />
        </Box>
    )
};

export default BaseLayout;