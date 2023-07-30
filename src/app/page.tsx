// import Image from 'next/image'
// import styles from './page.module.css'
// const { DragDropContext, Draggable, Droppable } = window.ReactBeautifulDnd;

import 'bootstrap/dist/css/bootstrap.min.css';
import TaskBoard from './tools/taskBoard';
import db_connection from './tools/dbConnect';
// import { useState } from 'react';


// const [cards,setCards]=useState();

export default function Home() {
  return (
    <main>
      <div className='container'>
        <TaskBoard />
      </div>
    </main>
  )
}


db_connection.query("SELECT * FROM columns", function (err, res) {
  console.log('res', res);
  console.log('err', err);

})
