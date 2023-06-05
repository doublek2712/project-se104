
import SignInAPI from "../../../api/SignInAPI"
import SignInForm from "../../../components/SignInForm/SignInForm"

import styles from './LoginOutlet.module.scss'


export default function LoginOutlet() {

    return (
        <div className={styles.container}>
            <SignInForm />
        </div>
    )
}