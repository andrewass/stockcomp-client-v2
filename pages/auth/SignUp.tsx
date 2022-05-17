import Link from "next/link";
import {useState} from "react";


export default function SignUp() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [retypedPassword, setRetypedPassword] = useState("");
    const [email, setEmail] = useState("");

    const submitForm = () => {
        alert("Submitting form");
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <label>Username :</label>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>

                <label>Email :</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>

                <label>Password : </label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                <label>Confirm Password : </label>
                <input type="password" value={retypedPassword} onChange={e => setRetypedPassword(e.target.value)}/>

                <button type="submit">Submit</button>
            </form>
            <Link href={"/auth/SignIn"}>Sign In</Link>
        </div>
    );
}
