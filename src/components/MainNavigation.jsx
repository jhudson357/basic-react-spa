import { NavLink } from 'react-router-dom'

import styles from './MainNavigation.module.css'

const MainNavigation = () => {
  return (
    <nav className={styles.header}>
      <ul className={styles.list}>
        <NavLink 
          to='/'
          className={({isActive}) => isActive ? styles.active : undefined}
        >
          Home
        </NavLink>
        <NavLink 
          to='/products' 
          className={({isActive}) => isActive ? styles.active : undefined} 
        >
          Products
        </NavLink>
      </ul>
    </nav>
  )
}

export default MainNavigation