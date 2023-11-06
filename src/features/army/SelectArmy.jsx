import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoaderData, useNavigate } from "react-router";
import { getCategoryOptions } from "../../helpers/apiArmies";
import store from "../../store";
import Button from "../../ui/Button";
import { armySelect, setOptions } from "./armySlice";
import SelectBtnBox from "./SelectBtnBox";

const SelectArmy = () => {
  const options = useLoaderData();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  function handlePrev() {
    if (index === 0) return setIndex(options.length - 1);
    setIndex((i) => i - 1);
  }

  function handleNext() {
    if (index === options.length - 1) return setIndex(0);
    setIndex((i) => i + 1);
  }

  function handleSelect() {
    dispatch(armySelect(options[index]));
    navigate("/profile");
  }
  return (
    <>
      <SelectBtnBox />
      <h2>{options[index].name}</h2>
      <div>
        {/* <select onChange={(e) => dispatch(armySelect(e.target.value))}>
          {options.map((army) => (
            <option key={army.name}>{army.name}</option>
          ))}
        </select> */}
        <Button onClick={handlePrev}>&larr;</Button>
        <img src={`/${options[index].image}`} />
        <Button onClick={handleNext}>&rarr;</Button>
      </div>
      <div>
        <Button type="primary" onClick={handleSelect}>
          Select Army
        </Button>
      </div>
    </>
  );
};

export async function loader({ params }) {
  const options = await getCategoryOptions(params.armyCategory);
  // store.dispatch(setOptions(options));
  return options;
}
export default SelectArmy;
