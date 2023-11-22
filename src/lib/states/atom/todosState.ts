import { atom } from "recoil";
import { todoType } from "../../../type";

export const todosListState = atom<todoType[]>({
  key: 'TodoList',
  default: [],
});
