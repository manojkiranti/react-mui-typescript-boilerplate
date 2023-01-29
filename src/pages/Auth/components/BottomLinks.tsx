  import {FC} from "react"
  import Grid from '@mui/material/Grid';
  import { Link } from "react-router-dom";

  const BottomLink:FC = () => {
    return (
      <Grid container spacing={2} mt={3}>
        <Grid item xs={12}>
          <p className="text-muted text-center">
            Don't have an account?
            <Link to={"/register"} className="text-primary fw-bold ms-1">
              Sign Up
            </Link>
          </p>
        </Grid>
      </Grid>
    );
  };

  export default BottomLink;