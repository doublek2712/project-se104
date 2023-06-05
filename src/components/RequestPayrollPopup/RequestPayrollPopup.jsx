import { TextField, Typography } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { Modal, DatePicker } from "antd";

import CustomButton from '../CustomButton/CustomButton';

import styles from './RequestPayrollPopup.module.scss'


export default function RequestPayrollPopup({ isOpen, handleCancel }) {

    // useEffect(() => {
    //     if (!isOpen) {
    //         return;
    //     }
    // }, [isOpen]);

    const test = () => {
        alert('success');
    }


    const sendRequest = () => {
        console.log("send");
    }

    return (
        <Modal
            open={isOpen}
            className="modalStyle"
            centered
            width={438}
            onCancel={handleCancel}
            footer={
                <div className={styles.modalFooter}>
                    <CustomButton label="Send" onClick={sendRequest}></CustomButton>
                </div>
            }
        >
            <div className={styles.dialogContainer}>
                <div className={styles.dialogTitle}>
                    <Typography id={styles.title} variant="h4" >Request payroll</Typography>
                    <Typography id={styles.description} variant="body2">Your request will be proccessed by Accounting Department</Typography>
                </div>
                <div className={styles.monthPicker}>
                    <Typography variant="subtitle2">Month:</Typography>
                    <DatePicker picker="month" />
                </div>
                <TextField id={styles.messagelInput} sx={{ width: '100%' }}
                    label="Message"
                    placeholder="Write something..."
                    multiline />
            </div>
        </Modal>

    )
}

