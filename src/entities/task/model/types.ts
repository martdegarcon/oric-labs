export type TaskDifficulty = "easy" | "medium" | "hard"
export type TaskCategory = "practice" | "refactoring" | "algo" | "async" | "premium"

export interface Task {
    id: string
    title: string
    description: string
    category: TaskCategory
    difficulty: TaskDifficulty
}