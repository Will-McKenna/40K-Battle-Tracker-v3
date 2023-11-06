import Button from "../../../ui/Button";

const Login = () => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <h2 className="font-semibold">Welcome, please sign in</h2>
        <input placeholder="Email" className="input" />
        <input placeholder="Password" className="input" />
      </div>
      <Button>Sign in</Button>
    </div>
  );
};

export default Login;
