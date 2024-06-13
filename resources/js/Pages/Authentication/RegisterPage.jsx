import { router, useForm } from '@inertiajs/react';
import { LoadingButton } from '@mui/lab';
import { Button, InputAdornment, TextField, Typography } from '@mui/material';
import React from 'react'
import { FaUser } from 'react-icons/fa';
import { MdEmail, MdPassword } from 'react-icons/md';
import AppWrapper from '../../Components/AppWrapper';

const RegisterPage = () => {

  const {data, setData, hasErrors, errors, post, processing} = useForm();

  const doRegister = (event) => {
    event.preventDefault();

    post(route('register'));
  }

  return (
    <AppWrapper>
        <div className="w-screen h-screen flex justify-center items-center">
            <form onSubmit={doRegister} className="box w-11/12" style={{ maxWidth: "450px" }}>
                <div className="text-center mb-8">
                    <Typography component="h1" variant='h4'>Sign Up</Typography>
                    <Typography component="h2" variant='subtitle1' gutterBottom>Please fill your details to create your account</Typography>
                </div>

                <div className='w-full mb-3'>
                    <TextField
                        type="text"
                        label="Full Name"
                        variant="outlined"
                        className='w-full'
                        disabled={processing}
                        onChange={e => setData('name', e.target.value)}
                        error={hasErrors && errors.name ? true : false}
                        helperText={hasErrors && errors.name}

                        InputProps={{
                            endAdornment: <InputAdornment position="end"><FaUser  size="25px" /></InputAdornment>,
                        }}
                    />

                </div>

                <div className='w-full mb-3'>
                    <TextField
                        type="email"
                        label="Email Address"
                        variant="outlined"
                        className='w-full'
                        disabled={processing}
                        onChange={e => setData('email', e.target.value)}
                        error={hasErrors && errors.email ? true : false}
                        helperText={hasErrors && errors.email}

                        InputProps={{
                            endAdornment: <InputAdornment position="end"><MdEmail size="25px" /></InputAdornment>,
                        }}
                    />

                </div>

                <div className='w-full mb-3'>
                    <TextField
                        type="password"
                        label="Password"
                        variant="outlined"
                        className='w-full'
                        disabled={processing}
                        onChange={e => setData('password', e.target.value)}
                        error={hasErrors && errors.password ? true : false}
                        helperText={hasErrors && errors.password}

                        InputProps={{
                            endAdornment: <InputAdornment position="end"><MdPassword size="25px"  /></InputAdornment>,
                        }}
                    />
                </div>

                <div className='w-full mb-2'>
                    <TextField
                        type="password"
                        label="Confrm Password"
                        variant="outlined"
                        className='w-full'
                        disabled={processing}
                        onChange={e => setData('password_confirmation', e.target.value)}
                        error={hasErrors && errors.password_confirmation ? true : false}
                        helperText={hasErrors && errors.password_confirmation}

                        InputProps={{
                            endAdornment: <InputAdornment position="end"><MdPassword size="25px"  /></InputAdornment>,
                        }}
                    />
                </div>

                <div className="mt-4 mb-2">
                    <Typography variant='body2'>By creating an account, you agree to Our Conditions of Use and Privacy Policy.</Typography>
                </div>

                <div className='w-full mb-2'>
                    <LoadingButton type="submit" loading={processing} variant="contained" size='large' className='w-full'>Sign up</LoadingButton>
                </div>
                <div className="text-right">
                    <Button size='small' onClick={() => router.get(route('login'))}>Already Have an Account? Login Now</Button>
                </div>

            </form>
        </div>
    </AppWrapper>
  )
}

export default RegisterPage
