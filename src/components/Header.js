import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGE } from "../utils/constants";
import { toggleGptSerchView } from "../utils/gptSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    const handleSignOut = () => {
      signOut(auth)
      .then(() => {
       
    }).catch((error) => {
       navigate("/error");
   });
    };

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
    const {uid, email, displayName, photoURL } = user;
    dispatch(
      addUser({
      uid: uid,
      email: email,
      displayName: displayName,
      photoURL: photoURL,
    }));
      navigate("/browse");
  } else {
    dispatch(removeUser());
    navigate("/");
  }
});
  return () => unsubscribe();

}, []);

const onHandleGptSearch = () => {
  // TOGGLE GPT SEARCH
  dispatch(toggleGptSerchView());
}

return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img
        className="w-44"
        src={LOGO}
        alt="logo"
        />
        {user && (<div className="flex p-2">
          <select>
            {SUPPORTED_LANGUAGE.map(lang =>
            <option key={lang.indentifier}value={lang.indentifier}>
              {lang.name}
            </option>)}
             
             
          </select>
            <button className="py-2 px-4 m-2 bg-red-600 text-black rounded-lg"
            onClick={onHandleGptSearch}>
              Serch Gpt
            </button>
            <img
            className="w-12 h-12"
            alt="userIcon"
            src={user?.photoURL}
            />
            <button onClick={handleSignOut} className="font-bold text-white">
                (Sign Out)
            </button>
        </div>
        )}
    </div>
)
};

export default Header;