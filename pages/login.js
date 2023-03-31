import Link from "next/link";
import { useState } from "react";
import cookie from "js-cookie";
import baseUrl from "@/helpers/baseUrl";
import Swal from "sweetalert2";
import { useRouter } from "next/router";


const Login = () => {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const grin = {
        color: "#2bbbad"
    }


    const userLogin = async (e) => {
        e.preventDefault();

        const res = await fetch(`${baseUrl}/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                phone: phone,
                password: password
            })


        });

        const res2 = await res.json();

        if (res2.error) {
            Toast.fire({
                icon: 'error',
                title: res2.error,
            })
        }
        else {
            cookie.set('token', res2.token);
            cookie.set('user', JSON.stringify(res2.user));
            Toast.fire({
                icon: 'success',
                title: "log in successful",
            })
            router.push('/account');
        }
    }


    return (
        <>
            <div className="lg:c-container-large md:c-container-large sm:c-container-small my-10">
                <div className="w-1/2 shadow-2xl shadow-zinc-400 mx-auto">
                    <h1 className="text-center text-2xl font-bold pt-6" style={grin}>Login</h1>
                    <form className="p-5" onSubmit={(e) => { userLogin(e) }}>

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