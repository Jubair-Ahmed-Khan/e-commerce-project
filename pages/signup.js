import Link from "next/link";
import Swal from "sweetalert2";
import baseUrl from "@/helpers/baseUrl";
import { useState } from "react";

const Signup = () => {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    // const router = useRouter();

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

    const userSignup = async (e) => {
        e.preventDefault();
        const res = await fetch(`${baseUrl}/api/signup`, {
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
            Toast.fire({
                icon: 'success',
                title: res2.message,
            })
            //router.push('/login');
        }

    }



    return (
        <>
            <div className="lg:c-container-large md:c-container-large sm:c-container-small my-10">
                <div className="w-1/2 shadow-2xl shadow-zinc-400 mx-auto">
                    <h1 className="text-center text-2xl font-bold pt-6" style={grin}>Signup</h1>
                    <form className="p-5" onSubmit={(e) => { userSignup(e) }}>
                        <input type="tel" placeholder="Phone" value={phone} onChange={(e) => { setPhone(e.target.value) }} autoComplete />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} autoComplete />
                        <Link href="/login">
                            <h5 className="text-blue-700 my-5 hover:underline">Already have an account?</h5>
                        </Link>
                        <div className="lg:w-1/6 mx-auto mt-7">
                            <button type="submit" className="btn bg-red-500 hover:bg-red-800 w-full">Signup</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup;