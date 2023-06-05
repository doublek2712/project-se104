
import {
    Typography, TextField
} from '@mui/material'
import styles from './ForgotPasswordForm.module.scss'
import CustomButton from '../CustomButton/CustomButton'

export default function ForgotPasswordForm() {
    return (
        <div className={styles.container}>
            <div className={styles.inputContainer}>
                <div className={styles.titleContainer}>
                    <Typography id={styles.title} variant='h5'>Forgot password</Typography>
                    <Typography id={styles.description} variant='h6'>Please enter your account email!</Typography>
                </div>
                <TextField id={styles.emailInput} label="Email" variant="outlined" sx={{ width: '45ch' }} />
            </div>
            <CustomButton type='solid' label='Enter' />
        </div>
    )
}
