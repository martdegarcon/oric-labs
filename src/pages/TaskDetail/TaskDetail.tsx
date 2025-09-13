import { useLoaderData } from "react-router-dom";
import type { Task } from "app/routes/routes.types";

const TaskDetail = () => {
    const task = useLoaderData() as Task

    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
        </div>
    )
}

export default TaskDetail