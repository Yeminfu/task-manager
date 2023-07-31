import { useForm, SubmitHandler } from "react-hook-form"
import { Task } from "./taskBoard"
import { useState } from "react"


type Inputs = {
    task_title: string
    exampleRequired: string
}

export default function Card(props: { task: Task, children?: any }) {

    const [isOpen, setIsOpen] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<any> = (task: Task) => {
        console.log(task.title)
        // fetch(
        //     "/api/create-task",
        //     {
        //         method: "POST",
        //         body: JSON.stringify({
        //             // a: 'bbb'
        //             id: task.id,
        //             title: task.title,
        //             column_id: task.column_id,
        //         })
        //     }
        // )
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
                                <input {...register("task_title")} placeholder="Текст задачи" />
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