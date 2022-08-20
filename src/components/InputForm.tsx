import { useEvent, useStore } from "effector-react";

import { $input, inputChangeed, itemAdded } from "../model";

const InputForm = () => {
  const userInput = useStore($input);

  const changeInput = useEvent(inputChangeed);
  const addItem = useEvent(itemAdded);

  return (
    <form
      className="form"
      onSubmit={(evt) => {
        evt.preventDefault();
        userInput && addItem(userInput);
      }}
    >
      <input
        className="form__input"
        type="text"
        placeholder="What to do?"
        value={userInput}
        onChange={(evt) => changeInput(evt.target.value)}
      />
      <button className="form__submit" type="submit">
        Add
      </button>
    </form>
  );
};

export default InputForm;
