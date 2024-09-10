import { Link } from "react-router-dom";
import handleGoogleLogin from "../googleauth/GoogleAuth";
import handleGithubLogin from "../githubauth/GithubAuth";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className=" mt-40 bg-slate-700 rounded-md ">
      <h1 className="text-4xl text-center p-5 text-white">
        Please login Here!
      </h1>
      <form onSubmit={handleLogin} className="flex flex-col w-full ">
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="p-5 outline-none m-10 rounded-md"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="p-5 outline-none m-10 rounded-md"
        />
        <div className="flex items-center  justify-center">
          <button
            type="submit"
            className="text-white m-10 p-3 w-40  text-2xl rounded-md border"
          >
            Submit
          </button>
          <p className="text-white ">
            Don&apos;t have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </form>
      <div className="flex text-white gap-5 text-2xl p-10 items-center justify-center">
        <button
          onClick={handleGoogleLogin}
          className="border p-3 rounded-md hover:transition cursor-pointer"
        >
          Login With Google
        </button>
        <button
          onClick={handleGithubLogin}
          className="border p-3 rounded-md hover:transition cursor-pointer"
        >
          {" "}
          Login With Github
        </button>
      </div>
    </div>
  );
};

export default Login;
