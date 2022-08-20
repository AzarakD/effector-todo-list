import { createEvent, createStore, forward } from "effector";

import { findIndexByDate } from "./utils";
import { FILTER_OPTS } from "./constants";
import { filter, toDo } from "./types";

// ----- Events -----

export const inputChangeed = createEvent<string>();
export const inputCleared = createEvent();

export const activeFilterSet = createEvent<filter>();

export const itemAdded = createEvent<string>();
export const itemStatusSwitched = createEvent<Date>();
export const itemRemoved = createEvent<Date>();

// ----- Store -----

export const $input = createStore("")
  .on(inputChangeed, (_, text) => text)
  .reset(inputCleared);

export const $activeFilter = createStore<filter>(FILTER_OPTS[0]).on(
  activeFilterSet,
  (_, filter) => filter
);

export const $todoList = createStore<toDo[]>([])
  .on(itemAdded, (state, text) => [
    ...state,
    { text: text, done: false, date: new Date() },
  ])
  .on(itemStatusSwitched, (state, date) => {
    const [arr, index] = findIndexByDate(state, date);
    arr[index].done = !arr[index].done;

    return arr;
  })
  .on(itemRemoved, (state, date) => {
    const [arr, index] = findIndexByDate(state, date);
    arr.splice(index, 1);

    return arr;
  });

// ----- Logic workflow -----

forward({
  from: itemAdded,
  to: inputCleared,
});
