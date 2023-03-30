import Link from "next/link";
import { useState } from "react";


const Login = () => {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const grin = {
        color: "#2bbbad"
    }


    return (
        <>
            <div className="lg:c-container-large md:c-container-large sm:c-container-small my-10">
                <div className="w-1/2 shadow-2xl shadow-zinc-400 mx-auto">
                    <h1 className="text-center text-2xl font-bold pt-6" style={grin}>Login</h1>
                    <form className="p-5">

                        <input type="tel" name="phone" placeholder="Phone" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        <Link href="/signup">
                            <h5 className="text-blue-700 my-5 hover:underline">Don't have an account?</h5>
                        </Link>
                        <div className="lg:w-1/6 mx-auto mt-7">
                            <button type="submit" className="btn bg-red-500 hover:bg-red-800 w-full">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;