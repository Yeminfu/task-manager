import { getTasks } from '@/app/page';
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const tasks = await getTasks();
    const path = request.nextUrl.searchParams.get('path');
    if (path) revalidatePath(path);
    return NextResponse.json({
        success: true,
        tasks
    });
}