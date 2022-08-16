import { tasks as data } from "./tasks";
import { useState, useEffect } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  if (tasks.length === 0) {
    return <h1>Aún no hay tareas</h1>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h1>{task.description}</h1>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
