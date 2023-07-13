import { Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'

interface TaskProps {
    content: string;
}

export function Task({ content }: TaskProps) {
    return (
        <div className={styles.task}>
            <div className={styles.inputContainer}>
                <input type="checkbox" />
            </div>
            <p>{content}</p>
            <button title='Remover tarefa'>
                < Trash size={18} />
            </button>
        </div>
    )
}