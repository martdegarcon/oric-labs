import { useLoaderData, Link } from "react-router-dom";
import type { Task } from "app/routes/routes.types";

export default function TaskList() {
    const tasks = useLoaderData() as Task[];

    return (
        <div>
            <h1>All Tasks</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <Link to={`/tasks/${task.id}`}>
                            {task.title} - {task.level}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}