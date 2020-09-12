import React, {useState} from "react"
import style from './MyTable.module.scss'
import {useDispatch, useSelector} from "react-redux"
import {getCurrentPageSelector, getCurrentUserSelector, getIsInitSelector} from "../../redux/table-selector"
import {Paginator} from "../Paginator/Paginator"
import {setCurrentUser, sortDownAC, sortUpAC} from "../../redux/table-reducer"
import {Filter} from "../Filter/Filter"
import {CurrentUser} from "../CurrentUser/CurrentUser"
import {Header} from "../Header/Header"
import loader from './../../common/images/loader.gif'

export const MyTable = ({table}) => {
    const [isSorted, setIsSorted] = useState(null)
    const [name, setName] = useState(null)
    let currentPage = useSelector(getCurrentPageSelector)
    let currentUser = useSelector(getCurrentUserSelector)
    let isInit = useSelector(getIsInitSelector)
    const dispatch = useDispatch()
    let sort = (name) => {
        setName(name)
        if(isSorted===null){
            setIsSorted(true)
            dispatch(sortUpAC(name))
        }
        else{
            setIsSorted(!isSorted)
            isSorted?dispatch(sortDownAC(name)):dispatch(sortUpAC(name))
        }
    }
    return (
        <>
            {isInit? <Header />:""}
            <table className={style.table}>
                <tr>
                    <th onClick={()=>{
                        sort('id')
                    }}>id
                        {
                            ((isSorted===null)||!(name==='id'))?'':
                                isSorted? <b>&and;</b>: <b>&or;</b>
                        }
                    </th>
                    <th onClick={()=>{
                        sort('firstName')
                    }}>firstName
                        {
                            ((isSorted===null)||!(name==='firstName'))?'':
                                isSorted? <b>&and;</b>: <b>&or;</b>
                        }
                    </th>
                    <th onClick={()=>{
                        sort('lastName')
                    }}>lastName
                        {
                            ((isSorted===null)||!(name==='lastName'))?'':
                                isSorted? <b>&and;</b>: <b>&or;</b>
                        }
                    </th>
                    <th onClick={()=>{
                        sort('email')
                    }}>email
                        {
                            ((isSorted===null)||!(name==='email'))?'':
                                isSorted? <b>&and;</b>: <b>&or;</b>
                        }
                    </th>
                    <th onClick={()=>{
                        sort('phone')
                    }}>phone
                        {
                            ((isSorted===null)||!(name==='phone'))?'':
                                isSorted? <b>&and;</b>: <b>&or;</b>
                        }
                    </th>
                </tr>
                {
                    isInit &&  table.map((el, i)=>{
                        if((i>=(currentPage-1)*50) && (i < currentPage*50)){
                            return (
                                <tr onClick={()=>{
                                    dispatch(setCurrentUser(el))
                                }}>
                                    <td>{el.id}</td>
                                    <td>{el.firstName}</td>
                                    <td>{el.lastName}</td>
                                    <td>{el.email}</td>
                                    <td>{el.phone}</td>
                                </tr>
                            )
                        }
                    })
                }
            </table>
            {!isInit &&
            <img
                className={style.loader}
                src={loader}/>}
            {currentUser && <CurrentUser currentUser={currentUser} />}
            <Paginator currentPage={currentPage} length={isInit?table.length:0} />
        </>
    )
}