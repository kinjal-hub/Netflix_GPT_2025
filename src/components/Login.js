import { useRef, useState } from "react";
import Header from "./Header";
import checkValidateData from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVTAR } from "../utils/constants";




const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    
    const dispatch = useDispatch();
    
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
      // validate  the  form  data
      
    const message = checkValidateData(email.current.value, password.current.value);
     setErrorMessage(message);
     if(message) return;
     if(!isSignInForm)
     {
       createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
    )
      .then((userCredential) => {
       // Signed up 
       const user = userCredential.user;
       updateProfile(user, {
       displayName: name.current.value,
       photoURL: USER_AVTAR
       }).then(() => {
        const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser(
              {uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL
            }));
              
        }).catch((error) => {
          setErrorMessage(message);
      });
       console.log(user);
      })
     .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + "-" + errorMessage);
     });
    }
    else
    {
       signInWithEmailAndPassword(auth,
        email.current.value,
        password.current.value)
      .then((userCredential) => {
       // Signed in 
       const user = userCredential.user;
       console.log(user);
       
     })
     .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + "-" + errorMessage);
     });
    }
     
    };

    const toggleSignIn = () => {
       setIsSignInForm(!isSignInForm);
    };

return (
    <div>
        <Header />
        <div className="absolute">
           <img
             src={BG_URL}
             alt="back-img"
           />
        </div>
           <form
           onSubmit={(e) => e.preventDefault()}
           className="absolute w-3/12 p-12 bg-black my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className="text-3xl font-bold py-4">
                {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 bg-gray-700 w-full"
            />}
            <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 bg-gray-700 w-full"
            />
            <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 bg-gray-700 w-full"
            />
            <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
            <button className="p-4 my-6 bg-red-600  rounded-lg w-full" onClick={handleButtonClick}>
                {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="py-4 cursor-pointer" onClick={toggleSignIn}>
                {isSignInForm ?
                "New to Netflix? Sign Up Now" : "Already registred? Sign in Now"}</p>
          </form>
    </div>
    
)
};

export default Login;