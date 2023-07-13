import  './global.css'
import styles from './App.module.css'
import { PlusCircle } from '@phosphor-icons/react'

import { Header } from './components/Header'
import { Task } from './components/Task'
import { NoTasks } from './components/NoTasks'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <form className={styles.taskForm}>
          <textarea placeholder='Adicione uma nova tarefa'></textarea>
          <button type='submit'>Criar <PlusCircle size={20} /></button>
        </form>
        
        <div className={styles.taskList}>
          <header>
            <p className={styles.createdTasks}>Tarefas criadas <span>5</span></p>
            <p className={styles.doneTasks}>Concluídas <span>2 de 5</span></p>
          </header>

          <div className={styles.tasks}>
            < NoTasks />
          </div>
          
        </div>
      </div>
    </div>
    
  )
}
