import { useParams } from "react-router-dom";

const dataset = [
  {id: 1, title: "First task", description: "Do this first"},
  {id: 2, title: "Second task", description: "Then this"},
  {id: 3, title: "Third Task", description: "And finally this"}
];

function TaskDetail() {
  const { id } = useParams();
  const task = dataset.find(task => task.id === Number(id));

  if (!task) return <p>Task not found</p>;

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
    </div>
  );
}

export default TaskDetail;
