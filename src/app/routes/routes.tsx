import Layout from "app/Layout";
import type { Task } from "./routes.types";
import { AlgoList, AsyncList, Home, PracticeList, PremiumList, RefactoringList } from 'pages';


export const fetchTasks = async (): Promise<Task[]> => {
    const res = await fetch("/tasks.json");
    if (!res.ok) throw new Response("Failed to fetch tasks", { status: res.status });
    return res.json();
};

const taskDetailLoader = async ({ params }: { params: Record<string, string> }) => {
    if (!params.id) throw new Response("Task ID is required", { status: 400 });

    const tasks = await fetchTasks();
    const task = tasks.find((t) => t.id === params.id);

    if (!task) throw new Response("Task not found", { status: 404 });

    return task;
};

export const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'practice', element: <PracticeList /> },
            { path: 'refactoring', element: <RefactoringList /> },
            { path: 'algorithms', element: <AlgoList /> },
            { path: 'async', element: <AsyncList /> },
            { path: 'premium', element: <PremiumList /> }
        ]
    }
];
