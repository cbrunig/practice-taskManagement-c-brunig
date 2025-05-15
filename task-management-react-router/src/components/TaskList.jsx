import { useParams } from "react-router-dom";

function TaskList() {
    const {datasetId} = useParams();

    const dataset = [
        {id: 1, title: "First task", description: "Do this first"},
        {id: 2, title: "Second task", description: "Then this"},
        {id: 3, title: "Third Task", description: "And finally this"}
    ];

    const taskData = dataset[datasetId] || "Task not found";

    return (
        <div>
            <ul>
                {dataset.map(task =>
                    <li key={task.id}>
                        <Link to={`/task/${task.id}`}>{task.title}</Link>
                    </li>
                )}
            </ul>
        </div>
    );

}
//display list of tasks

export default TaskList;