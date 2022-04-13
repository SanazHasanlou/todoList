import React from "react";
import Todo from "../Todo/Todo";
import "./TodoList.css";
const TodoList = ({ tasklist, settasklist, filterTasks }) => {
  return (
    <div className="listitems">
      <ul className="listitem-list">
        {filterTasks.map((item) => {
          return (
            <Todo
              key={item.id}
              text={item.text}
              item={item}
              tasklist={tasklist}
              settasklist={settasklist}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
