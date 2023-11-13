// 这是一个第三方 store 的例子，
// 你可能需要把它与 React 集成。

// 如果你的应用完全由 React 构建，
// 我们推荐使用 React state 替代。

// listeners 是一个数组，用来存储监听器函数。
// 每个监听器函数（listener）是一个不带参数的函数，用于在 todosStore 的状态发生变化时执行特定的操作。

// addTodo 函数用于添加一个新的待办事项到 todos 数组中。每当 addTodo 被调用时，它会新增一个待办事项，然后调用 emitChange() 函数。

// subscribe 函数接受一个监听器函数作为参数，将该函数添加到 listeners 数组中。当 addTodo 函数被调用时，它会遍历 listeners 数组，并且执行数组中的每个监听器函数。
// 这样，所有通过 subscribe 注册的监听器函数都会在 todos 数组发生变化时被调用。

// emitChange 函数遍历 listeners 数组，执行其中的每个监听器函数。这个函数的目的是通知所有监听器函数，todos 数组发生了变化。

interface Todo {
  id: number;
  text: string;
}

interface TodosStore {
  addTodo: () => void;
  subscribe: (listener: () => void) => () => void;
  getSnapshot: () => Todo[];
  getServerSnapshot?: () => Todo[];
}

let nextId = 0;
let todos = [{ id: nextId++, text: "Todo #1" }];
let listeners: (() => void)[] = [];

export const todosStore: TodosStore = {
  addTodo() {
    todos = [...todos, { id: nextId++, text: "Todo #" + nextId }];
    emitChange();
  },
  subscribe(listener) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  },
  getSnapshot() {
    return todos;
  },
  getServerSnapshot() {
    return todos;
  },
};

function emitChange() {
  console.log(listeners);
  for (let listener of listeners) {
    console.log(listener, 1);
    listener();
  }
}
