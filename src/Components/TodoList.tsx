import React from "react";
import { Box } from "@chakra-ui/react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <Box>
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          setTodos={setTodos}
          todos={todos}
        />
      ))}
    </Box>
  );
};

export default TodoList;
