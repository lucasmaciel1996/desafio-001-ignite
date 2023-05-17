import {  Notepad, Trash } from "phosphor-react";

import styles from './Task.module.css'

type Props ={
   tasks: {id:number;title:string, checked:boolean}[]
   onDeleteTask:(id:number)=>void
   onCheckTask:(id:number)=>void
}

export function Tasks ({tasks,onCheckTask,onDeleteTask}:Props){
    return (
        <div className={styles.wrapper}>
         <header>
            <div className={styles.task_created}>
               <strong>Tarafas críadas</strong>
               <span>{tasks.length}</span>
            </div>
            <div className={styles.task_done}>
               <strong>Concluídas</strong>
               <span>{tasks.filter(t=>t.checked).length} de {tasks.length}</span>
            </div>
         </header>

         <div className={styles.tasks}>
            {
               tasks.length ?
                tasks.map(t => {
                  return (
                     <div 
                        className={styles.list_item} 
                        key={t.id}
                     >
                        <input 
                           type="checkbox" 
                           onClick={()=>onCheckTask(t.id)} 
                           checked={t.checked} 
                           />
                        <p>{t.title}</p>
                        <Trash size={20} onClick={()=>onDeleteTask(t.id)}/>
                  </div>
                  )
                })
               :
               (
                  <div className={styles.empty_list}>
                     <Notepad size={40} />
                     <strong>Você ainda não tem tarefas cadastradas</strong>
                     <span>Crie tarefas e organize seus itens a fazer</span>
                  </div>
               )
            }
         </div>
        </div>
    )
}