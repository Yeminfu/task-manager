import { getTasks } from '@/app/page';
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
    request: Request,
    { params }: { params: { task_id: number } }
) {
    // console.log('params', params.task_id);

    const tasks = await getTasks(params.task_id);
    // const path = request.nextUrl.searchParams.get('path');
    // if (path) revalidatePath(path);
    return NextResponse.json({
        success: true,
        tasks
    });
}