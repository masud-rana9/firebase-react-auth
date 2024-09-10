import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Nav = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("User logged out");
      })
      .catch((error) => {
        console.log("Logout error", error);
      });
  };

  return (
    <div className="text-white p-10 container mx-auto flex justify-between bg-slate-700">
      <div>
        <h1 className="text-4xl font-semibold">Firebase/Auth</h1>
      </div>
      <div className="flex items-center">
        <Link className="text-2xl px-4" to="/">
          Home
        </Link>
        <Link className="text-2xl px-4" to="/orders">
          orders
        </Link>
        {user && (
          <Link className="text-2xl px-4" to="/profile">
            profile
          </Link>
        )}
        {user ? (
          <div className="flex items-center">
            <span className="text-2xl px-4">{user.email}</span>
            <button
              onClick={handleLogout}
              className="text-2xl p-3 bg-red-500 rounded-md hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link className="text-2xl px-4" to="/login">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
