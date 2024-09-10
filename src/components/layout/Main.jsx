import { Outlet } from "react-router-dom";
import Nav from "../nav/Nav";

const Main = () => {
  return (
    <div className="container mx-auto">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Main;
