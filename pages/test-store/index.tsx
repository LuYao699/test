import React, { useSyncExternalStore } from "react";
import { Button, Flex } from "@chakra-ui/react";
import { todosStore } from "../../_mock/todoStore";
interface Todo {
  id: number;
  text: string;
}
const Index: React.FC = () => {
  const todos = useSyncExternalStore<Todo[]>(todosStore.subscribe, todosStore.getSnapshot, todosStore.getServerSnapshot);

  return (
    <Flex width="200px" flexDir="column">
      <Button onClick={() => todosStore.addTodo()}>Add todo</Button>
      <hr />
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </Flex>
  );
};
export default Index;
