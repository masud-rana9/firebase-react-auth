import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { user, createUser } = useContext(AuthContext);

  console.log(user, createUser);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    createUser(email, password)
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
        Please Register Here!
      </h1>
      <form onSubmit={handleRegister} className="flex flex-col w-full ">
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
            Have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
