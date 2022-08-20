export type filter = "all" | "done" | "in progress";

export type toDo = {
  text: string;
  done: boolean;
  date: Date;
};
