import { useForm, SubmitHandler } from "react-hook-form"
import { Task } from "./taskBoard"
import { useState } from "react"


export default function Card(props: { task: Task, children?: any }) {

    const [isOpen, setIsOpen] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Task>({
        defaultValues: {
            id: props.task.id
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
            .then(x => x.json)
            .then(x => {
                console.log(x);
            })
    }


    return <>
        <div className="card mt-2" >
            <div className="card-body">
                <div>Колонка #{props.task.column_id}, карточка #{props.task.id}</div>

                {(() => {
                    if (!isOpen) return <h5 className="card-title">{props.task.title}</h5>
                    return <>
                        <div className="p-2">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("title")} placeholder="Текст задачи" />
                                <button>сохранить</button>
                            </form>
                        </div>
                    </>
                })()}

                <div>
                    <button onClick={() => setIsOpen(!isOpen)}>Изменить/отмена</button>
                </div>

            </div>
        </div>
        {props.children}
    </>
}