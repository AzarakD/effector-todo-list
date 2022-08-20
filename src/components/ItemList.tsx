import { useEvent, useStore } from "effector-react";
import { useMemo } from "react";

import {
  $activeFilter,
  $todoList,
  itemRemoved,
  itemStatusSwitched,
} from "../model";

const ItemList = () => {
  const todoList = useStore($todoList);
  const activeFilter = useStore($activeFilter);

  const removeItem = useEvent(itemRemoved);
  const switchItemStatus = useEvent(itemStatusSwitched);

  const shownList = useMemo(() => {
    if (activeFilter === "done") {
      return todoList.filter((item) => item.done);
    } else if (activeFilter === "in progress") {
      return todoList.filter((item) => !item.done);
    }
    return todoList;
  }, [activeFilter, todoList]);

  if (!shownList.length)
    return <div className="empty-item-list">There's nothing...</div>;

  return (
    <ul className="item-list">
      {shownList.map((elem, id) => (
        <div className="item-list__item" key={`${elem}${id}`}>
          <input
            type="checkbox"
            name="done"
            checked={elem.done}
            onChange={() => switchItemStatus(elem.date)}
          />
          <li className={`${elem.done ? "done" : ""}`}>{elem.text}</li>
          <span onClick={() => removeItem(elem.date)}>x</span>
        </div>
      ))}
    </ul>
  );
};

export default ItemList;
