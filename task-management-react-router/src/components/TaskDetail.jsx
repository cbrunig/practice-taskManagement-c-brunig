import { useParams } from "react-router-dom";
import {dataset} from "./TaskList";

function TaskDetail() {
    const {taskId} = useParams();
    const taskData = dataset[taskId] || "Task not found";

    return (
        <div>
            <h1>{taskData.title}</h1>
            <p>{taskData.description}</p>
        </div>
    );
}
//display details of specific task

export default TaskDetail;
