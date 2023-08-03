"use client"

import { useEffect } from "react";
import Card from "./card";
import { Project } from "../page";
import { createStore, createEvent } from "effector";
import { useStore } from "effector-react";

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

const setStateTasks = createEvent<Task[]>();

const $stateTasks = createStore<Task[]>([])
    .on(
        setStateTasks,
        (_, x) => x ? x : []
    );

export default function TaskBoard(props: { columns: Column[], project: Project, tasks: Task[] }) {
    useEffect(() => {
        setStateTasks(props.tasks);
    }, [props.tasks]);

    const stateTasks: Task[] = useStore($stateTasks);

    return <div>
        <button onClick={() => {
            updatetasks();
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
                    <div key={column.id}>
                        <div className='bg-secondary p-2 m-1' style={{ minHeight: 100 }}>
                            <div className="bg-white p-1 h2 text-nowrap">{column.title}</div>
                            <div>
                                {stateTasks
                                    .map((task, i1) => <div key={task.id}>
                                        {task.column_id === column.id ? <Card task={task} /> : null}
                                    </div>)}
                            </div>
                        </div>
                    </div>
                )}
        </div>
    </div >
}

export function updatetasks() {
    fetch(
        "/api/tasks/get",
    )
        .then(x => x.json())
        .then(({ tasks }) => {
            setStateTasks(tasks);
        })
}