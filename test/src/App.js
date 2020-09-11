import React, {useState} from 'react'
import {MyTable} from "./components/MyTable/MyTable"
import style from './App.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getFilterTableSelector, getTableSelector} from "./redux/table-selector";
import {fetchBigTableTC, fetchLittleTableTC} from "./redux/table-reducer";

const App = () => {
    let table = useSelector(getTableSelector)
    let filterTable = useSelector(getFilterTableSelector)
    let dispatch = useDispatch()
    const [isClicked, setIsClicked] = useState(false)
    let bigHandler = () => {
        dispatch(fetchBigTableTC())
        setIsClicked(true)
    }
    let littleHandler = () => {
        dispatch(fetchLittleTableTC())
        setIsClicked(true)
    }
    return (
        <div>
            {isClicked?<MyTable table={filterTable?filterTable:table} />:
                <div className={style.buttonBlock}>
                    <div onClick={bigHandler}>Большой объем данных</div>
                    <div onClick={littleHandler}>Маленький объем данных</div>
                </div>
            }
        </div>
    )
}

export default App
