import  './global.css'
import styles from './App.module.css'
import { PlusCircle } from '@phosphor-icons/react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { Header } from './components/Header'
import { Task } from './components/Task'
import { NoTasks } from './components/NoTasks'

export function App() {
  const [tasks, setTasks] = useState<string[]>([])

  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTasks([...tasks, newTaskText])

    setNewTaskText('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')

    setNewTaskText(event.target.value)
    
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task != taskToDelete
    })

    setTasks(tasksWithoutDeletedOne)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Preencha o campo para adicionar novas tarefas!')
  }


  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
          <textarea 
            onChange={handleNewTaskChange} 
            onInvalid={handleNewTaskInvalid}
            value={newTaskText} 
            placeholder='Adicione uma nova tarefa' 
            required
          />
          <button disabled={newTaskText.length === 0} type='submit'>Criar <PlusCircle size={20} /></button>
        </form>
        
        <div className={styles.taskList}>
          <header>
            <p className={styles.createdTasks}>Tarefas criadas <span>5</span></p>
            <p className={styles.doneTasks}>Concluídas <span>2 de 5</span></p>
          </header>

          <div className={styles.tasks}>
            {
              tasks.length == 0 ? < NoTasks /> : tasks.map(task => {
                return (
                  < Task onDeleteTask={deleteTask} key={task} content={task} />
                ) 
              })
            }         
          </div>
          
        </div>
      </div>
    </div>
    
  )
}
