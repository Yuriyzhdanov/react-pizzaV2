import React from 'react'
import debounce from 'lodash.debounce'

import styles from './Search.module.scss'

import svgFind from '../../img1/2203508_find_glass_magnify_search_icon.svg'
import svgclearIcon from '../../img1/4115230_cancel_close_delete_icon.svg'

import { SearchContext } from '../../App'


export const Search = () => {
   const [value, setValue] = React.useState('')
   const { setSearchValue } = React.useContext(SearchContext);
   const inputRef = React.useRef();

   const onClickClear = () => {
      setSearchValue('');
      setValue('');
      inputRef.current.focus()
   };
   const updateSearchValue = React.useCallback(
      debounce((str) => {
         setSearchValue(str);
      }, 1000),
      [],
   );
   const onChangeInput = (e) => {
      setValue(e.target.value);
      updateSearchValue(e.target.value);
   };

   return <div className={styles.root}>
      <img className={styles.icon} src={svgFind} />
      <input
         ref={inputRef}
         value={value}
         onChange={onChangeInput}
         className={styles.input}
         placeholder="Search pizzas..." />
      {value &&
         (<img onClick={onClickClear}
            className={styles.clearIcon}
            src={svgclearIcon} />)}
   </div>

}
