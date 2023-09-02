import "./App.css";
import InputField from "./Components/InputField";
import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Todo } from "./model";
import TodoList from "./Components/TodoList";
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);
  return (
    <Box m={5}>
      <Text textAlign={"center"} mb={3}>
        TASKIFY
      </Text>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </Box>
  );
};

export default App;
