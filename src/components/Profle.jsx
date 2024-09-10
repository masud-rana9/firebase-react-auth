import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Profle = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="">
      <h2>{user.email}</h2>
    </div>
  );
};

export default Profle;
