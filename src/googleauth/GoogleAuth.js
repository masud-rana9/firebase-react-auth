import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase.config";

const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();
const handleGoogleLogin = () => {
  signInWithPopup(auth, GoogleProvider)
    .then((result) => {
      const loogedUser = result.user;
      console.log(loogedUser);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export default handleGoogleLogin;
