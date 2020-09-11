import React from "react"
import style from './Paginator.module.scss'
import {useDispatch} from "react-redux";
import {setCurrentPageAC} from "../../redux/table-reducer";

export const Paginator = ({currentPage, length}) => {
    let dispatch = useDispatch()
    let nextPage = () => {
        if(currentPage !== Math.ceil(length/50)){
            dispatch(setCurrentPageAC(currentPage+1))
        }
    }
    let prevPage = () => {
        if(currentPage!==1){
            dispatch(setCurrentPageAC(currentPage-1))
        }
    }
    return (
        <div className={style.paginator}>
            <div className={(currentPage===1)?style.disabled:''}
                 onClick={prevPage}>Предыдущая страница</div>
            <div className={(currentPage===Math.ceil(length/50))?style.disabled:''}
                 onClick={nextPage}>Следующая страница</div>
        </div>
    )
}