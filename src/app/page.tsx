import 'bootstrap/dist/css/bootstrap.min.css';
import TaskBoard, { Column } from './tools/taskBoard';
import db_connection from './tools/dbConnect';


export interface Project {
  id: number
  title: string
}
export interface Task {
  id: number
  description: string
  title: string
  column_id: number
  project_id: number
}


export default async function Home() {
  const columns: Column[] = await getColumns();
  const projects: Project[] = await getProjects();
  if (!projects) return <>Не загрузились проекты</>;
  const project = projects[0];
  const tasks: Task[] = await getTasks();
  return (
    <main>
      <div className='container'>
        <TaskBoard columns={columns} project={project} tasks={tasks} />
      </div>
    </main>
  )
}



async function getColumns(): Promise<any> {
  return await new Promise(
    r => db_connection.query(
      `SELECT id, title FROM columns`,
      function (err, res) {
        if (err) {
          console.log('err #cn4b7vdD', err);
        }
        r(res);
      }
    )
  )
}


async function getProjects(): Promise<Project[]> {
  return await new Promise(
    r => db_connection.query(
      `SELECT * FROM projects`,
      function (err, res: Project[]) {
        if (err) {
          console.log('err #nv3nbyock', err);
        }
        r(res);
      }
    )
  )
}


export async function getTasks(): Promise<Task[]> {
  return await new Promise(
    r => db_connection.query(
      `SELECT * FROM tasks`,
      function (err, res: Task[]) {
        if (err) {
          console.log('err #22m4m6n', err);
        }
        r(res);
      }
    )
  )
}
