import { useState, useContext } from "react";
import { TaskContext } from "./../context/TaskContext";
function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const valor = useContext(TaskContext);
  console.log(valor);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(description);
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Escribe tu tarea..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripción de tu tarea. "
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        ></textarea>
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
