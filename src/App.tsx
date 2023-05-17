import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { Tasks } from "./components/Tasks";
import styles from './App.module.css'
import { useState } from "react";


export function App(){
    const [tasks,setTasks]=useState<{id:number,title:string;checked:boolean}[]>([])

    function handleDeleteTask(id:number){
        setTasks(tasks.filter(t=> t.id !== id) )
    }
    function handleCheckTask(id:number){
        setTasks(tasks.map(t=> {
            if(t.id === id )return {...t, checked:!t.checked}
            return t
        }) )
    }

    function handleCreateNewTask(task:string){
        setTasks(prev => [...prev,{
            id:tasks.length+1,
            title:task,
            checked:false
        }])
    }

    return (
        <div>
            <Header />
            <main className={styles.main}>
                <NewTask onCreateNewTask={handleCreateNewTask}/>
                <Tasks tasks={tasks} onDeleteTask={handleDeleteTask} onCheckTask={handleCheckTask}/>
            </main>
        </div>  
    )
} 