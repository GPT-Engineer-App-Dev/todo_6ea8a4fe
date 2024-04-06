import React, { useState } from "react";
import { Box, Heading, Input, Button, VStack, HStack, IconButton, Text, useColorModeValue, Container } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input === "") return;
    const newTodos = [...todos, { id: Date.now(), text: input }];
    setTodos(newTodos);
    setInput("");
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading mb={6}>Todo App</Heading>
        <HStack width="100%">
          <Input placeholder="Add a new task" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={handleKeyPress} />
          <IconButton icon={<FaPlus />} colorScheme="blue" onClick={addTodo} aria-label="Add todo" />
        </HStack>
        <VStack spacing={3} width="100%" bg={useColorModeValue("gray.50", "gray.700")} p={5} borderRadius="md" boxShadow="md">
          {todos.map((todo) => (
            <HStack key={todo.id} width="100%" justifyContent="space-between">
              <Text>{todo.text}</Text>
              <IconButton icon={<FaTrash />} colorScheme="red" onClick={() => deleteTodo(todo.id)} aria-label="Delete todo" />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
