import {NextPage} from "next";
import Link from "next/link";
import styles from "../../styles/Home.module.css"

const SignIn: NextPage = () => {
    return (
        <div className={styles.main}>
            <form>
                <label>
                    Name:
                    <input type="text" name="name"/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
            <Link href={"/auth/SignUp"}>Sign Up</Link>
        </div>
    )
}

export default SignIn