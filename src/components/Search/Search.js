import React from 'react'
import style from './Search.module.scss'

const Search = ({setSearch, setPageNumber}) => {
  return (
    <form className="d-flex justify-content-center gap-4 mb-5">
        <input onChange={e=>{setPageNumber(1); setSearch(e.target.value)}} placeholder='Karakter ara' type="text" className={style.input}/>
        <button onClick={e=>{e.preventDefault()}} className="btn btn-outline-success">Ara</button>
    </form>
  )
}

export default Search