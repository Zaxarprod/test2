import React from "react"
import style from './CurrentUser.module.scss'

export const CurrentUser = ({currentUser}) => {
    return (
        <div className={style.wrapper}>
            <p>
                Выбран пользователь <b>{currentUser.firstName} {currentUser.lastName}</b><br/>
                Описание:<br/>
                   {currentUser.description}<br/>
                Адрес проживания: <b>{currentUser.address.streetAddress}</b><br/>
                Город: <b>{currentUser.address.city}</b><br/>
                Провинция/штат: <b>{currentUser.address.state}</b><br/>
                Индекс: <b>{currentUser.address.zip}</b><br/>
            </p>
        </div>
    )
}