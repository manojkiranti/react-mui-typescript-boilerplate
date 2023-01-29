import {FC} from 'react';

// form
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//MUI
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// components
import AuthLayout from './components/AuthLayout';
import BottomLinks from './components/BottomLinks';

type FormValues = {
    firstName: string;
    password: string;
  };

  const schemaResolver = yupResolver(
    yup.object().shape({
      userId: yup.string().required("Please enter user id"),
      password: yup.string().required("Please enter Password")
    })
  );



const Login:FC = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: schemaResolver
    });
    const onSubmit: SubmitHandler<FormValues> = data => {
        console.log(data)
    }
    return(
        <>
        <AuthLayout bottomLinks={<BottomLinks />}>
            <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="firstName"
                        control={control}
                        
                        render={({ field }) => <TextField {...field}  />}
                    />
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => <TextField {...field}  />}
                    />
                    <Button variant="contained" type="submit">Submit</Button>
                </form>
            </Box>
        </AuthLayout>
        </>
    )
}

export default Login