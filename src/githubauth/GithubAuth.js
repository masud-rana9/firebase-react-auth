import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase.config";

const auth = getAuth(app);
const GithubProvider = new GithubAuthProvider();
const handleGithubLogin = () => {
  signInWithPopup(auth, GithubProvider)
    .then((result) => {
      const loogedUser = result.user;
      console.log(loogedUser);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export default handleGithubLogin;
