import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Button from "../../ui/Button";
import { categorySelect } from "./armySlice";

const SelectBtnBox = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick(category) {
    dispatch(categorySelect(category));
    navigate(`/select/${category}`);
  }
  return (
    <div className="flex items-center justify-between">
      <Button onClick={() => handleClick("imperiumArmies")}>Imperium</Button>
      <Button onClick={() => handleClick("spaceMarineArmies")}>
        Space Marines
      </Button>
      <Button onClick={() => handleClick("chaosArmies")}>Chaos</Button>
      <Button onClick={() => handleClick("xenosArmies")}>Xenos</Button>
    </div>
  );
};

export default SelectBtnBox;
