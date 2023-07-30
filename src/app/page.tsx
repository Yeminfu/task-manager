// import Image from 'next/image'
// import styles from './page.module.css'
// const { DragDropContext, Draggable, Droppable } = window.ReactBeautifulDnd;

import 'bootstrap/dist/css/bootstrap.min.css';
import TaskBoard from './tools/taskBoard';
// import { useState } from 'react';


// const [cards,setCards]=useState();

export default function Home() {
  return (
    <div className='container'>
      <TaskBoard />
     
      {/* asd
      <div className="d-flex"></div> */}
    </div>
  )
}
