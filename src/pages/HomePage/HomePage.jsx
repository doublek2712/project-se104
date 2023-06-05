import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import styles from './HomePage.module.scss'
import logo from '../../assets/app-logo.svg'

import RequestPayrollPopup from '../../components/RequestPayrollPopup/RequestPayrollPopup';


export default function HomePage() {
  const [trigger, setTrigger] = useState(false);

  const navigate = useNavigate();
  const handleNavigateToLogin = () => {
    navigate('/login');
  }
  const requestPayroll = () => {
    showDialog();
  }

  const showDialog = () => {
    setTrigger(true);
  }
  const handleCancel = () => {
    setTrigger(false);
  }
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} ></img>
      <div className={styles.loginBtn} onClick={handleNavigateToLogin}>Login to PM !</div>
      <div className={styles.requestBtn} onClick={requestPayroll}>Request payroll</div>
      <RequestPayrollPopup isOpen={trigger} handleCancel={handleCancel} />
    </div>

  )
}

