import { getTasks } from '@/app/page';
import { NextResponse } from 'next/server';

export async function GET() {
    const tasks = await getTasks();
    return NextResponse.json({
        success: true,
        tasks
    });
}