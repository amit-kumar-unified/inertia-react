import { router, useForm } from '@inertiajs/react'
import { LoadingButton } from '@mui/lab'
import { Button, InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'
import { MdEmail, MdPassword } from 'react-icons/md'
import AppWrapper from '../../Components/AppWrapper'

const LoginPage = () => {

  const {data, setData, processing, errors, hasErrors, post} = useForm();

  const doLogin = (event) => {
    event.preventDefault();

    post(route('login'));

  }

  return (
    <AppWrapper>
        <div className="w-screen h-screen flex justify-center items-center">
            <form onSubmit={doLogin} className="box w-11/12" style={{ maxWidth: "450px" }}>

                <div className="text-center mb-8">
                    <Typography component="h1" variant='h4'>Welcome Back</Typography>
                    <Typography component="h2" variant='subtitle1' gutterBottom>Please enter your credentials to login</Typography>
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

                <div className='w-full mb-2'>
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
                    <LoadingButton type="submit" loading={processing} variant="contained" size='large' className='w-full'>Login</LoadingButton>
                </div>
                <div className="text-right">
                    <Button size='small' onClick={() => router.get(route('register'))}>Don't Have an Account? Create Now</Button>
                </div>

            </form>
        </div>
    </AppWrapper>
  )
}

export default LoginPage
