import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Home = () => {
  const user = useContext(AuthContext);
  return <div>{user.displayname}</div>;
};

export default Home;
