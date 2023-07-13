import { Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'


export function Task() {
    return (
        <div className={styles.task}>
            <div className={styles.inputContainer}>
                <input type="checkbox" />
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. lor</p>
            <button title='Remover tarefa'>
                < Trash size={18} />
            </button>
        </div>
    )
}