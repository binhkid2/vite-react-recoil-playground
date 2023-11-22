import { useRecoilState } from "recoil";
import { inputState } from "../lib/states/atom/inputState";
import { todosListState } from "../lib/states/atom/todosState";
import { todoType } from "../type";
const getKey = () => Math.random().toString(32).substring(2);

export default function Main() {
  const [todoTitle, setTodoTitle] = useRecoilState(inputState);
  const [todosList, setTodosList] = useRecoilState(todosListState);
  function onChange(event) {
    setTodoTitle(event.target.value);
  }
  function addTodo() {
    const newTodo: todoType = { id: getKey(), title: todoTitle };
    setTodosList([...todosList, newTodo]);
    setTodoTitle("");
  }
  function deleteTodo(id:string) {
    setTodosList(todosList.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <h2>List Todos</h2>
      <input type="text" onChange={onChange} value={todoTitle} />
      <button onClick={addTodo}>Add to list</button>
      <ul className="list-disc list-inside bg-white rounded-lg shadow-md p-4">
        {todosList.map((todo) => (
          <li
            className="text-base text-gray-800 border-b border-gray-200 py-2"
            key={todo.id}
          >
            {todo.title}  <button onClick={() => deleteTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}
