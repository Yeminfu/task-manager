import { useForm, SubmitHandler } from "react-hook-form"
import { Task } from "./taskBoard"
import { useState } from "react"


type Inputs = {
    task_title: string
    exampleRequired: string
}


export default function Card(props: { item: Task, children?: any }) {

    const [isOpen, setIsOpen] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


    return <>
        <div className="card" >
            <div className="card-body">

                {(() => {
                    if (!isOpen) return <h5 className="card-title">{props.item.title}</h5>
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