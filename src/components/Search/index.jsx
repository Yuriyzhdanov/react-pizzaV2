import React from 'react'
import styles from './Search.module.scss'
import svgFind from '../../img1/2203508_find_glass_magnify_search_icon.svg'
import svgclearIcon from '../../img1/4115230_cancel_close_delete_icon.svg'

export const Search = ({ searchValue, setSearchValue }) => {
   return <div className={styles.root}>
      <img className={styles.icon} src={svgFind} />
      <input
         value={searchValue}
         onChange={(e) => setSearchValue(e.target.value)}
         className={styles.input}
         placeholder="Search pizzas..." />
      {searchValue &&
         (<img onClick={() => setSearchValue('')} className={styles.clearIcon} src={svgclearIcon} />)}
   </div>

}
