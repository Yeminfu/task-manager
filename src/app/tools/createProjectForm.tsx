"use client"

import { useForm } from 'react-hook-form';


export default function CreateProjectForm() {
    const {
        register,
        handleSubmit,
    } = useForm<any>()

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("title")} placeholder="Название проекта" />
            <button>сохранить</button>
        </form>
    </>
}


async function onSubmit(values: any) {
    console.log('onSubmit', values);
}