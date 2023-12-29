import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
	const [email,setEmail] = useState("")
	const [pass, setPass] = useState("")
	const {login} = useContext(AuthContext)
	const handleSubmit = (e)=>{
		e.preventDefault()
		console.log({email,pass});
		if(email.toLowerCase() === "admin@aa.com" && pass.toLowerCase()  ==="admin"){
			login({email,pass})
		} else {
			alert("Incorrect User Information")
		}
	}
	return (
		<div className="loginDiv">
			<div className="h-[500px] w-11/12 sm:w-[475px] bg-white rounded-[20px] p-5 flex justify-between flex-col">
				<div className="flex justify-center items-center mt-2 gap-2">
					<span className="w-[6px] bg-[#C4EEF2] h-[19px]"></span>
					<span className="w-[6px] bg-[#C4EEF2] h-[39px]"></span>
					<h1 className="text-[22px] sm:text-[2rem] font-jetbrain font-[700] uppercase">
						C Store
					</h1>
					<span className="w-[6px] bg-[#C4EEF2] h-[39px]"></span>
					<span className="w-[6px] bg-[#C4EEF2] h-[19px]"></span>
				</div>
				<div className="my-2 text-center">
					<h3 className="font-jetbrain font-[600] text-[22px] uppercase text-black">
						SIGN IN
					</h3>
					<p className="font-montserrat text-labelColor text-label mt-1">
						Enter your credentials to access your account
					</p>
				</div>
				<form className="flex flex-col text-left p-3 gap-5" onSubmit={handleSubmit}>
					<div className="flex flex-col gap-2">
						<label
							className="font-montserrat text-label text-labelColor hover:cursor-pointer hover:after:content-['admin@aa.com'] hover:after:text-[#A67458] hover:after:pl-3 hover:after:underline"
							htmlFor="email"
						>
							Email
						</label>
						<input
							type="email"
							placeholder="Enter your email"
							className="login-input"
							value={email}
							onChange={(e)=>setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label
							className="font-montserrat text-label text-labelColor hover:cursor-pointer hover:after:content-['admin'] hover:after:text-[#A67458] hover:after:pl-3 hover:after:underline"
							htmlFor="pass"
						>
							Password
						</label>
						<input
							className="login-input"
							type="password"
							name="pass"
							placeholder="Enter your password"
							value={pass}
							onChange={(e)=>setPass(e.target.value)}
							required
						/>
					</div>
					<button
						type="submit"
						className="bg-main h-[44px] font-jetbrain text-label text-white uppercase hover:opacity-90 rounded-[4px]"
					>
						Sign In
					</button>
					<p className="flex justify-center items-center flex-wrap">
						<span className="text-label font-montserrat font-[400] text-labelColor">
							{" "}
							Forgot your password?{" "}
						</span>
						<span className="text-main text-[14px] font-montserrat font-[500] underline ml-1">
							Reset Password
						</span>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
