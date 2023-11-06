import Button from "./Button";

const Homepage = () => {
  return (
    <div>
      <h1>Welcome to 40K Battle Tracker</h1>
      <Button to="/select" type="primary">
        Select your army
      </Button>
    </div>
  );
};

export default Homepage;
