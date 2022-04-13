import { useState } from "react";
import "./Form.css";
const Form = ({ settasklist, tasklist, setstatus,setErrorText }) => {
  const [inputText, setInputText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (inputText) {
      settasklist([
        ...tasklist,
        {
          text: inputText,
          completed: false,
          id: Date.now(),
        },
      ]);
      setInputText("");
      setErrorText('')
    } else {
      setErrorText("please Enter a Task...");
    }
  };

  const statusHandler = (e) => {
    setstatus(e.target.value);
  };
  const addTaskHandler = (e) => {};
  return (
    <form onSubmit={submitHandler}>

      <input
        value={inputText}
        type="text"
        placeholder="tasks ..."
        onChange={(e) => setInputText(e.target.value)}
      />


      <button onClick={addTaskHandler} type="submit" className="btn">
        <i className="fa fa-plus"></i>
      </button>


      <div className="custom-select">
        <select onChange={statusHandler}>
          <option value="all">all</option>
          <option value="completed">completed</option>
          <option value="uncompleted">uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
