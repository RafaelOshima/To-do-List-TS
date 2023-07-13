import { Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'

interface TaskProps {
    content: string;
    onDeleteTask: (task: string) => void;
}

export function Task({ content, onDeleteTask }: TaskProps) {
    function handleDeleteTask() {
        onDeleteTask(content)
    }
    
    return (
        <div className={styles.task}>
            <div className={styles.inputContainer}>
                <input type="checkbox" />
            </div>
            <p>{content}</p>
            <button onClick={handleDeleteTask} title='Remover tarefa'>
                < Trash size={18} />
            </button>
        </div>
    )
}