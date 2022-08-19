import TaskCard from './TaskCard'
import { useContext } from "react";
import { TaskContext } from "./../context/TaskContext";

function TaskList() {

  const { tasks } = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h1>Aún no hay tareas</h1>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}></TaskCard>
      ))}
    </div>
  );
}

export default TaskList;
