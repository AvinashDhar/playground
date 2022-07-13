import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearTodos, getTodos } from "../redux/slices/todoSlice";
import Button from './Button/Button';

function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const handleLoadingPosts = () => {
    dispatch(getTodos());
  };

  return (
    <div>
      Todos
      <hr></hr>
      <Button onClick={handleLoadingPosts}>Load posts</Button>
      <Button onClick={() => dispatch(clearTodos())}>Clear posts</Button>
      <br />
      <div>
        {todos.slice(0, 5).map((item) => {
          return (
            <div key={item.id}>
              <h4>{item.title}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todos;
