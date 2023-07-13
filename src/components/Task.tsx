import { Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'
import { useState } from 'react';

interface TaskProps {
    content: string;
    onDeleteTask: (task: string) => void;
    onCheckTask: (task: number) => void;
}

export function Task({ content, onDeleteTask, onCheckTask }: TaskProps) {
    const [isChecked, setIsChecked] = useState(false)

    function handleDeleteTask() {
        onDeleteTask(content)
    }

    function handleCheckBoxChange() {
        setIsChecked(!isChecked)

        isChecked == false ? onCheckTask(1) : onCheckTask(-1)
    }
    
    return (
        <div className={isChecked ? styles.taskDone : styles.task}>
            <div className={styles.inputContainer}>
                <input 
                    className={styles.check}
                    type="checkbox" 
                    checked={isChecked}
                    onChange={handleCheckBoxChange}
                />
            </div>
            <p className={isChecked ? styles.done : ''} >{content}</p>
            <button className={styles.trashButton} onClick={handleDeleteTask} title='Remover tarefa'>
                < Trash size={18} />
            </button>
        </div>
    )
}