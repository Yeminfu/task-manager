"use client"

import { useState } from "react";
import Card from "./card";
import { Project } from "../page";

export interface Task {
    id: number
    title: string,
    column_id: number
    project_id: number
}

export interface Column {
    id: number
    title: string
    items: Task[]
}

export default function TaskBoard(props: { columns: Column[], project: Project, tasks: Task[] }) {
    const [stateTasks, setStateTasks] = useState(props.tasks);

    return <div>
        <button onClick={() => {
            fetch(
                "/api/tasks/get",
            )
                .then(x => x.json())
                .then(({ tasks }) => {
                    setStateTasks(tasks);
                })
        }}>
            update tasks
        </button>
        <button className='btn btn-sm btn-outline-dark'
            onClick={() => {
                fetch(
                    "/api/create-task",
                    {
                        method: "POST",
                        body: JSON.stringify({
                            title: "Новая задача",
                            column_id: 1,
                            project_id: 1,
                        })
                    }
                )
                    .then(x => x.json())
                    .then(newTask => {
                        setStateTasks([...stateTasks, newTask.task]);
                    })
            }}
        >Создать карточку</button>
        <div className="d-flex">
            {props.columns
                ?.map((column, i: any) =>
                    <div key={i}>
                        <div className='bg-secondary p-2 m-1' style={{ minHeight: 100 }}>
                            <div className="bg-white p-1">{column.title} {stateTasks.length}</div>
                            <div>
                                {stateTasks
                                    .map((task, i1) => <div key={i1}>
                                        {/* <pre>{JSON.stringify([column.id, task.column_id, column.id == task.column_id])}</pre> */}
                                        {task.column_id === column.id ? <Card task={task} /> : null}

                                    </div>)}
                            </div>
                        </div>
                    </div>
                )}
        </div>
        <table className="table">
            <thead>
                <tr>
                    <th>columns</th>
                    <th>project</th>
                    <th>tasks {stateTasks.length}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><pre>{JSON.stringify(props.columns, null, 2)}</pre></td>
                    <td><pre>{JSON.stringify(props.project, null, 2)}</pre></td>
                    <td><pre>{JSON.stringify(stateTasks, null, 2)}</pre></td>
                </tr>
            </tbody>
        </table>
    </div >
}

function updateTasks() {

}