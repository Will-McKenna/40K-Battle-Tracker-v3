import { useNavigate, useRouteError } from "react-router";
import Button from "./Button";

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div>
      <h1>Oops, something went wrong.</h1>
      <p>{error.message || error.data}</p>
      <Button onClick={() => navigate(-1)}>&larr; Take me back</Button>
    </div>
  );
};

export default Error;
