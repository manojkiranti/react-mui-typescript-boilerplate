import { FC } from 'react';
import { Link } from 'react-router-dom';

// form
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//MUI
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

// components
import AuthLayout from './components/AuthLayout';
import BottomLinks from './components/BottomLinks';

//images
import Logo from "../../assets/images/logo.png";

import { useAppDispatch } from '../../store/store';
import { useAppSelector } from "../../store/store";
//actions
import { resetLogin, login } from '../../store/auth/auth-slice';


type FormValues = {
    username: string;
    password: string;
};

const schemaResolver = yupResolver(
    yup.object().shape({
        username: yup.string().required("Please enter user id"),
        password: yup.string().required("Please enter Password")
    })
);



const Login: FC = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: schemaResolver,
        defaultValues: {
            username: '',
            password: ''
        }
    });
    const dispatch = useAppDispatch();
    const { isLoggedIn, isLoading, isSuccess } = useAppSelector(state => state.auth);

    const onSubmit: SubmitHandler<FormValues> = data => {
         dispatch(login(data))
    }
    return (
        <>
            <AuthLayout bottomLinks={<BottomLinks />}>
                <Box>
                    <Box sx={{ textAlign: "center" }}>
                        <Link to="/">
                            <Box component="span">
                                <Box component="img" src={Logo} alt="" sx={{ maxWidth: "100px" }} />
                            </Box>
                        </Link>
                    </Box>
                    <Typography variant="h4" mt={3}>
                        Welcome back!
                    </Typography>
                    <Typography variant="body2" mb={6} sx={{ color: "muted.main" }}>
                        Enter your user id and password to access admin panel.
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box mb={5}>
                            <Controller
                                name="username"
                                control={control}
                                render={({ field }) => <TextField
                                    label="First Name"
                                    fullWidth
                                    variant="standard"
                                    error={errors.username ? true : false}
                                    helperText={errors.username ?errors.username.message:''}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PersonIcon fontSize='small' />
                                            </InputAdornment>
                                        ),
                                    }}
                                    {...field} />}
                            />
                        </Box>
                        <Box mb={5}>
                            <Controller
                                name="password"
                                control={control}
                                render={({ field }) => <TextField
                                    label="password"
                                    fullWidth
                                    variant="standard"
                                    error={errors.password ? true : false}
                                    helperText={errors.password ?errors.password.message:''}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LockIcon fontSize='small' />
                                            </InputAdornment>
                                        ),
                                    }}
                                    {...field} />}
                            />
                        </Box>
                        <Box mb={2}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
                            </FormGroup>
                        </Box>
                        <Button variant="contained" type="submit" fullWidth disabled={isLoading}>Log In</Button>
                        <Box mt={10}>
                            <Link to="/login">
                                <Typography variant="body2" sx={{ color: "muted.main" }}> Forgot your password? </Typography>
                            </Link>
                        </Box>
                    </form>
                </Box>
            </AuthLayout>
        </>
    )
}

export default Login