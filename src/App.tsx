import  './global.css'
import styles from './App.module.css'
import { PlusCircle } from '@phosphor-icons/react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Header } from './components/Header'
import { Task } from './components/Task'
import { NoTasks } from './components/NoTasks'

interface taskProps {
  id: string;
  content: string;
  status: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<taskProps[]>([])

  const taskChecked = tasks.filter(task => {
    return task.status == true
  })

  const sumTaskChecked = taskChecked.length

  const [newTaskText, setNewTaskText] = useState('')



  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTasks([...tasks, {id: uuidv4(), content: newTaskText, status: false}])

    setNewTaskText('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')

    setNewTaskText(event.target.value)
    
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.content != taskToDelete
    })

    setTasks(tasksWithoutDeletedOne)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Preencha o campo para adicionar novas tarefas!')
  }

  function checkTask (id: string) {
    const checkedOneTasks = tasks.map(task => {
      return {
        ...task,
        status: task.id == id ? !task.status : task.status
      }
    })

    setTasks(checkedOneTasks)
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
            <p className={styles.createdTasks}>Tarefas criadas <span>{tasks.length}</span></p>
            <p className={styles.doneTasks}>Concluídas <span>{sumTaskChecked} de {tasks.length}</span></p>
          </header>

          <div className={styles.tasks}>
            {
              tasks.length == 0 ? < NoTasks /> : tasks.map(task => {
                return (
                  < Task 
                      key={task.id} 
                      id={task.id}
                      onDeleteTask={deleteTask} 
                      content={task.content} 
                      status={task.status}
                      onCheckTask={checkTask}
                  />
                ) 
              })
            }         
          </div>
          
        </div>
      </div>
    </div>
    
  )
}
