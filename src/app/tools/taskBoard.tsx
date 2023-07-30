"use client"

import { useState } from "react";

// const columns = 4;,


interface Column {
    id: number
    title: string
    items: {
        id: number
        title: string
    }[]
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
        {/* <pre>{JSON.stringify(columns, null, 2)}</pre> */}
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
                console.log('create card', columns.map((column: any, i: number) => {
                    if (i === 0) {
                        return {
                            ...column,
                            items: [
                                ...column.items,
                                { id: 11 }
                            ]
                        }
                    }
                    return column;
                }));
                // setColumns(
                //     columns_[0].items?.push(
                //         {
                //             title: "Новые",
                //             items: [
                //                 { id: 1 }
                //             ]
                //         },)
                // )
            }}
        >Создать карточку {columns.length}</button>
        <div className="d-flex">
            {columns
                ?.map((column, i: any) =>
                    <div key={i}>
                        <div className='bg-secondary p-2 m-1' style={{ minHeight: 100 }}>

                            <div className="bg-white p-1">{column.title}</div>
                            <div>
                                {column.items.map((item) => <div>{item.title}</div>)}
                            </div>
                        </div>
                    </div>
                )}
            {/* <div className="col"> */}
            {/* </div> */}
        </div>
    </div >
}
