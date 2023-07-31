import db_connection from '@/app/tools/dbConnect';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const task = await request.json();

    if (!task.id) {
        return NextResponse.json({
            success: false,
            err: "#dm32mcs09"
        });
    }

    if (!task.title) {
        return NextResponse.json({
            success: false,
            err: "#m3cv4vo"
        });
    }
    const res = await new Promise(r => {
        const qs = `UPDATE tasks SET title = ? WHERE id = ?`;
        const values = [task.title, task.id];
        db_connection.query(qs, values, function (err, res: any) {
            if (err) { console.log('err #c9c6f3bnNn', err) }
            r(res.affectedRows);
        })
    });

    if (res) {
        return NextResponse.json({
            success: true,
        });
    } else {
        return NextResponse.json({
            success: false,
        });
    }

}