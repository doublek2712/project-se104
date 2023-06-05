
import {
    Typography, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignInForm.module.scss'
import CustomButton from '../CustomButton/CustomButton';
import axios from 'axios';
import SignInAPI from '../../api/SignInAPI';




export default function SignInForm() {
    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     // Gọi callback onLogin và truyền thông tin đăng nhập
    //     onLogin({ username, password });

    //     // Đặt lại giá trị form sau khi submit

    // };

    const login = (event) => {
        event.preventDefault();

        SignInAPI(email, password);

        // setUsername('');
        // setPassword('');

    }
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = event => {
        event.preventDefault()
    };
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.inputContainer}>
                <Typography id={styles.title} variant='h4'>Welcome!</Typography>
                <TextField
                    id={styles.emailInput}
                    variant="outlined"
                    label="Email"
                    sx={{ width: '45ch' }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <FormControl sx={{ width: '45ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormControl>
            </div>
            <div className={styles.buttonContainer}>
                <CustomButton type='solid' label='Login' onClick={login} />
                <Typography id={styles.forgotPasswordBtn} variant='body1' onClick={() => {
                    navigate('/login/forgot-password');
                }} >Forgot password?</Typography>
            </div>

        </div>
    );
}