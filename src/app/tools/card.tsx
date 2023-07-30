import { useForm, SubmitHandler } from "react-hook-form"
import { Task } from "./taskBoard"


type Inputs = {
    example: string
    exampleRequired: string
}


export default function Card(props: { item: Task, children?: any }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


    return <>
        <div className="card" >
            {/* <img className="card-img-top" src="..." alt="Card image cap"> */}
            <div className="card-body">
                <h5 className="card-title">{props.item.title}</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input {...register("example")} placeholder="Текст задачи" />

                    {/* include validation with required or other standard HTML validation rules */}
                    {/* <input {...register("exampleRequired", { required: true })} /> */}
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" />
                </form>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}

                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
        {props.children}
    </>
}