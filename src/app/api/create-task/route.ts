import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const task = await request.json();

    if (!task.id) {
        return NextResponse.json({
            success: false,
            err: "#vuebn85"
        });
    }

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

    console.log('request', await request.json());
    return NextResponse.json({
        success: true,
    });
}