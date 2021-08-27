import React, {ChangeEvent, Dispatch, useState} from "react"
import "./App.css"

import {TodoTask} from "./component/TodoTask.component"

import {ITask} from "./interfaces";


export const App: React.FC = () => {

    const [task, setTask] = useState<string>("")
    const [deadLine, setDeadLine] = useState<number>()
    const [todoList, setTodoList] = useState<ITask[]>([])


    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.name === "task") {
            setTask(e.target.value)
        } else {
            setDeadLine(Number(e.target.value))
        }
    }

    const handleAddTask = (): void => {
        const newTask = {taskName: task, deadLine: deadLine }
        setTodoList([...todoList, newTask])
        setTask("")
        setDeadLine(0)
    }

    const completeTask = (taskNameToDelete: string): void => {
        setTodoList(todoList.filter(task => {
            return task.taskName !== taskNameToDelete
        }))
    }

    return (
        <div className="app">
            <div className="header">
                <div className="inputContainer">
                    <input
                        type="text"
                        placeholder="Task..."
                        onChange={handleChange}
                        value={task}
                        name="task"
                    />
                    <input
                        type="number"
                        placeholder="Deadline (in days)..."
                        onChange={handleChange}
                        value={deadLine}
                        name="deadline "
                    />
                </div>
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            <div className="todoList">
                {todoList.map((task: ITask, index: number) => (
                    <TodoTask key={index} task={task} completeTask={completeTask}/>
                ))}
            </div>
        </div>
    )
}
