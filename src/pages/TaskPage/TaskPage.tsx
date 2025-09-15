import React, { useEffect, useState } from "react";
import TaskList from "../../entities/task/ui/TaskList";
import type { Task } from "entities/task/model/types";

interface TaskPageProps {
    title: string;         
    category: string;      
}

const TaskPage: React.FC<TaskPageProps> = ({ title, category }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        fetch("/tasks.json")
            .then((res) => res.json())
            .then((data: Task[]) => {
                const filteredTasks = data.filter(task => task.category === category);
                setTasks(filteredTasks);
            });
    }, [category]);

    return (
        <div className="p-6 mt-30">
            <h1 className="text-2xl font-bold mb-5">{title}</h1>
            <TaskList tasks={tasks} />
        </div>
    );
};

export default TaskPage;
