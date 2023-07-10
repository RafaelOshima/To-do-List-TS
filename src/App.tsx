import  './global.css'
import styles from './App.module.css'
import { PlusCircle } from '@phosphor-icons/react'

import { Header } from './components/Header'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <form className={styles.commentForm}>
          <textarea placeholder='Adicione uma nova tarefa'></textarea>
          <button type='submit'>Criar <PlusCircle size={20} /></button>
        </form>
        
        <div className={styles.taskList}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
      </div>
    </div>
    
  )
}
