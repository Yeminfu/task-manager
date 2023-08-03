import { getColumns, Project, getProjects, Task, getTasks } from "@/app/page";
import TaskBoard, { Column } from "@/app/tools/taskBoard";

export default async function Page({ params }: any) {
    const { id } = params;
    const columns: Column[] = await getColumns();
    const projects: Project[] = await getProjects();
    if (!projects) return <>Не загрузились проекты</>;
    const project = id;
    const tasks: Task[] = await getTasks();
    return <>
        <TaskBoard columns={columns} project={project} tasks={tasks} />
    </>
}