import ForgotPasswordForm from "../../../components/ForgotPasswordForm/ForgotPasswordForm"
import styles from "./ForgotPasswordOutlet.module.scss"

export default function ForgotPasswordOutlet() {
    return (
        <div className={styles.container}>
            <ForgotPasswordForm />
        </div>

    )
}