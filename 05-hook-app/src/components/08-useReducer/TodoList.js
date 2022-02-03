import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, handleDelete, handleToggle }) => {
  return (
    <>
      <ul className="list-group list-group-flush">
        {todos.map((todo, i) => (
          <TodoListItem
            todo={todo}
            i={i}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
