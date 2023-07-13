import styles from './NoTasks.module.css'
import Clipboard from '../assets/Clipboard.svg'

export function NoTasks() {
    return (
        <div className={styles.container}>
            <img src={Clipboard} alt="ClipBoard-icon" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}