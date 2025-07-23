import { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignIn = () => {
       setIsSignInForm(!isSignInForm);
    };

return (
    <div>
        <Header />
        <div className="absolute">
           <img
             src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_small.jpg"
             alt="back-img"
           />
        </div>
           <form className="absolute w-3/12 p-12 bg-black my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className="text-3xl font-bold py-4">
                {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 bg-gray-700 w-full"
            />}
            <input
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 bg-gray-700 w-full"
            />
            <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 bg-gray-700 w-full"
            />
            <button className="p-4 my-6 bg-red-600  rounded-lg w-full">
                {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="py-4" onClick={toggleSignIn}>
                {isSignInForm ?
                "New to Netflix? Sign Up Now" : "Already registred? Sign in Now"}</p>
          </form>
    </div>
    
)
};

export default Login;