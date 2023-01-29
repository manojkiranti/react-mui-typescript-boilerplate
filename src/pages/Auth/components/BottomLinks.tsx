  import {FC} from "react";

  //mui
  import Grid from '@mui/material/Grid';
  import { Link } from "react-router-dom";
  import Typography from '@mui/material/Typography';
  import { Box } from '@mui/material';

  const BottomLink:FC = () => {
    return (
      <Grid container spacing={2} mt={3}>
        <Grid item xs={12}>
          <Typography variant="body2" sx={{textAlign:'center'}} >
            Don't have an account?
            <Link to={"/register"}>
              <Box sx={{fontWeight:"700", color:"primary.main"}} component="span">&nbsp;Sign Up</Box>
            </Link>
          </Typography>
        </Grid>
      </Grid>
    );
  };

  export default BottomLink;