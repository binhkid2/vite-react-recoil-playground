import { selector } from "recoil";
import { todosListState } from "../atom/todosState";



export const todoListLength = selector({
    key: 'todoListLength', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const todosList = get(todosListState);
  
      return todosList.length;
    },
  });