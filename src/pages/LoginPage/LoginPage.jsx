
import { Outlet, useNavigate } from 'react-router-dom'
import logo from '../../assets/app-logo.svg'
import backBtn from '../../assets/back-button.svg'
import styles from './LoginPage.module.scss'

export default function LoginPage() {

    return (
        <div className={styles.container}>
            <div className={styles.Outlet}>
                <div className={styles.header}>
                    <img className={styles.logo} src={logo} />
                </div>
                <div className={styles.back}>
                    <img className={styles.backButton} src={backBtn} />
                </div>
                <Outlet />
            </div>
            <div className={styles.decorContainer}>

            </div>
        </div>
    )
}

