import 'bootstrap/dist/css/bootstrap.min.css';
import db_connection from './tools/dbConnect';
import CreateProjectForm from './tools/createProjectForm';


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

  return (
    <main>
      <h1>Главная</h1>
      <CreateProjectForm />

    </main>
  )
}



export async function getColumns(): Promise<any> {
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


export async function getProjects(): Promise<Project[]> {
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


export async function getTasks(projectId: number): Promise<Task[]> {
  return await new Promise(
    r => db_connection.query(
      `SELECT * FROM tasks WHERE project_id = ${projectId}`,
      function (err, res: Task[]) {
        if (err) {
          console.log('err #22m4m6n', err);
        }
        r(res);
      }
    )
  )
}
