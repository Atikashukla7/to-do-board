import { React, useState } from "react";

const Input = ({ task, setTask }) => {
  const [input, setInput] = useState("");


  const display = (e) => {
    e.preventDefault();
    setTask([...task, input]);
    setInput("");
  };

  console.log(task);

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter task here"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button onClick={display}>Add</button>
      </form>
    </div>
  );
};

export default Input;
