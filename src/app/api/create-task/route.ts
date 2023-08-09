import { Task } from '@/app/page';
import {pool} from '@/app/tools/dbConnect';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const task = await request.json();

    if (!task.title) {
        return NextResponse.json({
            success: false,
            err: "#mcj5ncaa"
        });
    }

    if (!task.column_id) {
        return NextResponse.json({
            success: false,
            err: "#nsn6vd"
        });
    }

    if (!task.project_id) {
        return NextResponse.json({
            success: false,
            err: "#vdfgn4al"
        });
    }

    const newTaskId = await createTask(task);

    return NextResponse.json({
        success: true,
        task: {
            id: newTaskId,
            ...task,
        }
    });
}

async function createTask({ title, column_id, project_id, description }: Task) {
    const qs = `INSERT INTO tasks (title, description, column_id, project_id) VALUES (?,?,?,?)`;
    const values = [title, description, column_id, project_id];
    return await new Promise(r => pool.query(qs, values, function (err: any, taskResult: any) {
        if (err) console.log('err #n5n7nfKf', err);
        r(taskResult.insertId)
    }))
}