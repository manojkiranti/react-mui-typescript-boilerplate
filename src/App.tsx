import { useRoutes } from 'react-router-dom';
import router from './routes';

import theme from './assets/theme';

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from '@mui/material';
//css
import "./fonts/font.css";
import "./assets/scss/app.scss";



function App() {
  const content = useRoutes(router);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {content}
    </ThemeProvider>
    // <div>
    //   {content}
    // </div>
    
  )
}

export default App
