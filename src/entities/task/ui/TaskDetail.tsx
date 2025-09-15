import type { Task } from "../model/types";

const TaskDetail: React.FC<Task> = ({id, title, description, category, difficulty}) => {
    return (
        <div className="p-4 border rounded-lg">
            <div className="flex items-center">
                <p className="bg-gray-100 w-8 h-8 flex justify-center items-center rounded-4xl text-gray-700">{id}</p>
                <p className="bg-amber-400 py-1 px-2 rounded-4xl ml-auto">{difficulty}</p>
            </div>
            <h3 className="font-bold mt-4">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    )
}

export default TaskDetail