import TaskCard from './TaskCard'

function TaskList({tasks, deleteTask}) {


  if (tasks.length === 0) {
    return <h1>Aún no hay tareas</h1>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask}></TaskCard>
      ))}
    </div>
  );
}

export default TaskList;
