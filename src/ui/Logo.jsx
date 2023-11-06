import { Link } from "react-router-dom";

//inline style just a placeholder for now
const Logo = () => {
  return (
    <Link to="/" className="">
      <img
        src="/40kbattletrackerlogo.png"
        alt="40K Battle Tracker Logo"
        style={{ width: "200px", height: "100px" }}
      />
    </Link>
  );
};

export default Logo;
