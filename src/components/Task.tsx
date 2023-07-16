import { Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'

interface TaskProps {
    content: string;
    status: boolean;
    id: string;
    onDeleteTask: (task: string) => void;
    onCheckTask: (task: string) => void;
}

export function Task({ content, status, id, onDeleteTask, onCheckTask }: TaskProps) {
    function handleDeleteTask() {
        onDeleteTask(content)
    }

    function handleCheckBoxChange() {
        onCheckTask(id)
    }
    
    return (
        <div className={status ? styles.taskDone : styles.task}>
            <div className={styles.inputContainer}>
                <input 
                    className={styles.check}
                    type="checkbox" 
                    checked={undefined}
                    onChange={handleCheckBoxChange}
                />
            </div>
            <p className={status ? styles.done : ''} >{content}</p>
            <button className={styles.trashButton} onClick={handleDeleteTask} title='Remover tarefa'>
                < Trash size={18} />
            </button>
        </div>
    )
}