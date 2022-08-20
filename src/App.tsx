import InputForm from "./components/InputForm";
import ItemList from "./components/ItemList";
import Filter from "./components/Filter";

import "./App.css";

export default function App() {
  return (
    <div className="container">
      <h1>ToDo List</h1>
      <InputForm />
      <Filter />
      <ItemList />
    </div>
  );
}
