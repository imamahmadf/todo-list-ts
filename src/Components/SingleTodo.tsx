import React, { useState } from "react";
import { Box, HStack, Text, Spacer } from "@chakra-ui/react";
import { Todo } from "../model";
import { DeleteIcon, CheckIcon, EditIcon } from "@chakra-ui/icons";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <Box>
      <HStack
        backgroundColor={todo.isDone ? "#68D391" : "#63B3ED"}
        color={"white"}
        p="10px"
        borderRadius={5}
        mb={5}
      >
        <Text>{todo.todo}</Text>
        <Spacer />
        <EditIcon />
        <CheckIcon
          onClick={() => {
            handleDone(todo.id);
          }}
        />
        <DeleteIcon
          onClick={() => {
            handleDelete(todo.id);
          }}
        />
      </HStack>
    </Box>
  );
};

export default SingleTodo;
