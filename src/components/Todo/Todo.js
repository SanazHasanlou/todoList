import React from "react";
import "./Todo.css";
const Todo = ({ text, item, settasklist, tasklist }) => {
  const deletHandler = () => {
    const filteritems = tasklist.filter((i) => i.id !== item.id);
    settasklist(filteritems);
  };

  const completeHandler = () => {
    const result = tasklist.map((i) => {
      if (i.id === item.id) {
        return {
          ...i,
          completed: !i.completed,
        };
      } 
        return i;
      
    });
    settasklist(result)
  };
  return (
    <div className="items">
      <li className={item.completed ? 'completed' : '' }>{text}</li>
      <button className='btn' onClick={completeHandler}>
        <i className="fa fa-check"></i>
      </button>
      <button className="btn" onClick={deletHandler}>
        <i className="fa fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
