import { toDo } from "./types";

export const findIndexByDate = (
  state: toDo[],
  date: Date
): [toDo[], number] => [
  [...state],
  state.findIndex((item) => item.date === date),
];
