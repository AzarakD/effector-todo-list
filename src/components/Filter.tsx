import { useEvent, useStore } from "effector-react";

import { $activeFilter, activeFilterSet } from "../model";
import { FILTER_OPTS } from "../constants";

const Filter = () => {
  const activeFilter = useStore($activeFilter);

  const setActiveFilter = useEvent(activeFilterSet);

  return (
    <ul className="filter">
      {FILTER_OPTS.map((option) => (
        <li
          className={`${activeFilter === option ? "active" : ""}`}
          key={option}
          onClick={() => setActiveFilter(option)}
        >
          {option}
        </li>
      ))}
    </ul>
  );
};

export default Filter;
