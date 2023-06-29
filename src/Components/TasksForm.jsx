import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../app/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
function TasksForm() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(editTask(task));
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [params.id, tasks]);

  return (
    <div>
      <form className="bg-zinc-800 max-w-sm p-4" onSubmit={handleSubmit}>
        <label className="block text-xs font-bold mb-4" for="title">
          Task:
        </label>
        <input
          className="w-full p-2 bg-zinc-600 mb-2"
          onChange={handleChange}
          name="title"
          type="text"
          placeholder="title"
          value={task.title}
        />
        <label className="block text-xs font-bold mb-4" for="description">
          Description:
        </label>
        <textarea
          className="w-full p-2 bg-zinc-600 mb-2"
          onChange={handleChange}
          name="description"
          placeholder="description"
          value={task.description}
        ></textarea>
        <button className="bg-indigo-600 px-2 py-1">save</button>
      </form>
    </div>
  );
}

export default TasksForm;
