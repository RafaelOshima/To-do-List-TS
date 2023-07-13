import  './global.css'
import styles from './App.module.css'
import { PlusCircle } from '@phosphor-icons/react'
import { ChangeEvent, FormEvent, useState } from 'react'

import { Header } from './components/Header'
import { Task } from './components/Task'
import { NoTasks } from './components/NoTasks'

export function App() {
  const [tasks, setTasks] = useState([
    'muito legaaaaaaaaaaaaal'
  ])

  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTasks([...tasks, newTaskText])

    setNewTaskText('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTaskText(event.target.value)
    
  }

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
          <textarea 
            onChange={handleNewTaskChange} 
            value={newTaskText} 
            placeholder='Adicione uma nova tarefa' 
          />
          <button type='submit'>Criar <PlusCircle size={20} /></button>
        </form>
        
        <div className={styles.taskList}>
          <header>
            <p className={styles.createdTasks}>Tarefas criadas <span>5</span></p>
            <p className={styles.doneTasks}>Concluídas <span>2 de 5</span></p>
          </header>

          <div className={styles.tasks}>
            {tasks.map(task => {
              return (
                < Task key={task} content={task} />
              ) 
            })}
            
          </div>
          
        </div>
      </div>
    </div>
    
  )
}
