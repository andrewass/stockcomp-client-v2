import Link from "next/link";

export default function SignIn() {
    return (
        <div>
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