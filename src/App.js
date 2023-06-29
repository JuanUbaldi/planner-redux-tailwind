import "./App.css";

import TasksForm from "./Components/TasksForm";
import TasksList from "./Components/TasksList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <h1 class="text-center py-10 "> ORGANIGRAMA DE TAREAS</h1>
      <div className="flex items-center justify-center h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TasksList />} />
            <Route path="/create" element={<TasksForm />} />
            <Route path="/edit/:id" element={<TasksForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
