import React from "react";
import { Input, Box, Button, HStack, FormControl } from "@chakra-ui/react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  //   const inputRef = useRef<HTMLInputElement>(null);
  return (
    <Box>
      <Box>
        <FormControl pb="20px">
          <HStack>
            <Input
              type="name"
              placeholder="Search Room"
              borderRadius="0"
              borderColor="rgba(175, 175, 175, 1)"
              value={todo}
              onChange={(e) => setTodo(e.currentTarget.value)}
            />

            <Button
              display={{ ss: "none", sl: "flex" }}
              h="40px"
              w="150px"
              borderRadius={0}
              fontSize="16px"
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              _hover={{
                bg: "black",
                color: "white",
              }}
              bg="primary"
              onClick={(e) => {
                handleAdd(e);
              }}
            >
              Add
            </Button>
          </HStack>
        </FormControl>
      </Box>
    </Box>
  );
};

export default InputField;
