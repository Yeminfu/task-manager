import { useForm, SubmitHandler } from "react-hook-form"
import { Task, updatetasks } from "./taskBoard"
import { useState } from "react"
import { toast } from "react-toastify";

export default function Card(props: { task: Task, children?: any }) {
    const [isOpen, setIsOpen] = useState(false);
    const {
        register,
        handleSubmit,
    } = useForm<Task>({
        defaultValues: {
            id: props.task.id,
            title: props.task.title,
            column_id: props.task.column_id,
            project_id: props.task.project_id,
        }
    })

    const onSubmit: SubmitHandler<any> = (task: Task) => {
        console.log(task)
        fetch(
            "/api/tasks/edit",
            {
                method: "POST",
                body: JSON.stringify({
                    ...task
                })
            }
        )
            .then(x => x.json())
            .then(x => {
                toast(JSON.stringify(x, null, 2))
                console.log('xx', x);
            })
    }

    return <>
        {JSON.stringify({ isOpen })}
        <div className="card mt-2" onClick={() => { if (!isOpen) setIsOpen(true) }}>
            <div className="card-body">
                {(() => {
                    if (!isOpen) return <h5 className="card-title">{props.task.title}</h5>
                    return <>
                        <div className="p-2">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("title")} placeholder="Текст задачи" />
                                <button>сохранить</button>
                            </form>
                            <div className="p-2">
                                <p>Переместить в</p>
                                <ul>
                                    {[
                                        [1, "Новые"],
                                        [2, "Сейчас в работе"],
                                        [3, "Выполненные"],
                                        [4, "На паузе"],
                                        [5, "Корзина"],
                                    ]
                                        .map(([columnId, columnName], i) => <li
                                            key={columnId}
                                            onClick={() => {
                                                moveToColumn(props.task, Number(columnId))
                                            }}
                                        >{columnName}</li>)}
                                </ul>
                            </div>
                        </div>
                    </>
                })()}

                {isOpen &&
                    <div>
                        <button onClick={() => {
                            setIsOpen(false);
                        }}>Изменить/отмена</button>
                    </div>
                }

            </div>
        </div>
        {props.children}
    </>
}


function moveToColumn(task: Task, newColumnId: number) {
    console.log({
        ...task,
        column_id: newColumnId
    });

    fetch(
        "/api/tasks/edit",
        {
            method: "POST",
            body: JSON.stringify({
                ...task,
                column_id: newColumnId
            })
        }
    )
        .then(x => x.json)
        .then(x => {
            console.log(x);
            updatetasks();
        })
}