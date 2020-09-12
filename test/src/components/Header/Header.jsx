import React from "react"
import style from './Header.module.scss'
import {Filter} from "../Filter/Filter";
import Add from "../Add/Add";


export const Header = () => {
    return (
        <div className={style.header}>
            <Filter />
            <Add />
        </div>
    )
}