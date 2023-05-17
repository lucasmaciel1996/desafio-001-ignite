import { Plus } from "phosphor-react";
import styles from './NewTask.module.css'
import { useState } from "react";


type Props ={
    onCreateNewTask:(task:string)=>void
 }

export function NewTask({onCreateNewTask}:Props){
    const [task,setTask] =useState('')

    function handleNewTask(){
        if(!task)return

        onCreateNewTask(task)
        setTask('')
    }

   return (
        <div className={styles.containerBox}>
            <input 
                type="text" 
                placeholder="Adcione uma nova tarefa" 
                onChange={(e)=> setTask(e.target.value)}
                value={task}
            />
            <button 
                disabled ={task===''}
                onClick={handleNewTask}
            >
                Criar <Plus size={20} />
            </button>
        </div>
   ) 
}