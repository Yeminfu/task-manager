"use client"

// import { useState } from "react";
// import Card from "./card";
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
    // const [stateColumns, setColumns] = useState(props.columns);
    return <div>


        <button className='btn btn-sm btn-outline-dark'
            onClick={() => {
                console.log('создаем карточку');
            }}
        >Создать карточку</button>
        <div className="d-flex">
            {props.columns
                ?.map((column, i: any) =>
                    <div key={i}>
                        <div className='bg-secondary p-2 m-1' style={{ minHeight: 100 }}>
                            <div className="bg-white p-1">{column.title}</div>
                            {/* <div>
                                {column.items.map((item, i1) => <Card key={i1} item={item} />)}
                            </div> */}
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
