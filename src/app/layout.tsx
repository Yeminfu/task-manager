import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Project, getProjects } from './page';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Диспетчер задач',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const projects: Project[] = await getProjects();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container py-2">
          <header>
            <Link href="/">Главная</Link>
            {projects.map(project => <Link key={project.id} className='ms-2' href={`/project/${project.id}`}>{project.title}</Link>)}
          </header>
        </div>
        <div className="container">{children}</div>
        <ToastContainer />
      </body>
    </html>
  )
}
