"use client"

import { useState } from "react";
import Card from "./card";


export interface Task {
    id: number
    title: string
}


export interface Column {
    id: number
    title: string
    items: Task[]
}

const columns_: Column[] = [
    {
        id: 1,
        title: "Новые",
        items: [
            { id: 1, title: "Создать менеджер задач", }
        ]
    },
    {
        id: 2,
        title: "Сейчас в работе",
        items: []
    },
    {
        id: 3,
        title: "Срочные",
        items: []
    },
    {
        id: 3,
        title: "Выполненные",
        items: []
    },
    {
        id: 3,
        title: "На паузе",
        items: []
    },
];


export default function TaskBoard() {
    const [columns, setColumns] = useState<Column[]>(columns_);
    return <div>
        <button className='btn btn-sm btn-outline-dark'
            onClick={() => {
                setColumns(columns.map((column: Column, i: number) => {
                    if (i === 0) {
                        return {
                            ...column,
                            items: [
                                ...column.items,
                                { id: 11, title: "Новая задача" },
                            ]
                        }
                    }
                    return column;
                }));
            }}
        >Создать карточку {columns.length}</button>
        <div className="d-flex">
            {columns
                ?.map((column, i: any) =>
                    <div key={i}>
                        <div className='bg-secondary p-2 m-1' style={{ minHeight: 100 }}>
                            <div className="bg-white p-1">{column.title}</div>
                            <div>
                                {column.items.map((item, i1) => <Card key={i1} item={item} />)}
                            </div>
                        </div>
                    </div>
                )}
        </div>
    </div >
}
