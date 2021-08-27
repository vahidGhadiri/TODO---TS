import React from "react"
import {ITask} from "../interfaces";

interface Props {
    task: ITask

    completeTask(taskNameToDelete: string): void
}

export const TodoTask: React.FC<Props> = ({task, completeTask}) => {
    return (
        <div className="task">
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadLine}</span>
            </div>
            <button onClick={() => completeTask(task.taskName)}>X</button>
        </div>
    )
}
