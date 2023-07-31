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
        <button className='btn btn-sm btn-outline-dark'
            onClick={() => {
                console.log('создаем карточку');
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
                    .then(x => console.log('xx', x))
            }}
        >Создать карточку</button>
        <div className="d-flex">
            {props.columns
                ?.map((column, i: any) =>
                    <div key={i}>
                        <div className='bg-secondary p-2 m-1' style={{ minHeight: 100 }}>
                            <div className="bg-white p-1">{column.title}</div>
                            <div>
                                {stateTasks
                                    .filter(task => task.column_id === column.id)
                                    .map((task, i1) => <div key={i1}>
                                        <Card task={task} />
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
                    <th>tasks</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><pre>{JSON.stringify(props.columns, null, 2)}</pre></td>
                    <td><pre>{JSON.stringify(props.project, null, 2)}</pre></td>
                    <td><pre>{JSON.stringify(props.tasks, null, 2)}</pre></td>
                </tr>
            </tbody>
        </table>
    </div >
}
