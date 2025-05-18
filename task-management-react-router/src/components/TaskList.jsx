import { Link } from "react-router-dom";

const dataset = [
  {id: 1, title: "First task", description: "Do this first"},
  {id: 2, title: "Second task", description: "Then this"},
  {id: 3, title: "Third Task", description: "And finally this"}
];

function TaskList() {
  return (
    <div>
      <ul>
        {dataset.map(task => (
          <li key={task.id}>
            <Link to={`/task/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
