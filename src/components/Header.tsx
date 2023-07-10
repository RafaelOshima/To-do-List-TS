import styles from './Header.module.css'

import ToDoLogo from '../assets/ToDo-Logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={ToDoLogo} alt="Logo do Projeto" />
        </header>
    ) 
}