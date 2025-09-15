import { TaskDetail } from "..";
import type { Task } from "../model/types";

interface TaskListProps {
    tasks: Task[]
}

const TaskList: React.FC<TaskListProps> = ({tasks}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map((task) => (
                <TaskDetail key={task.id} {...task}/>
            ))}
        </div>
    )
}

export default TaskList