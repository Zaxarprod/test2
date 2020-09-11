import axios from "axios"

export const FETCH_TABLE = 'table/FETCH_TABLE'
export const SET_CURRENT_PAGE = 'table/SET_CURRENT_PAGE'
export const SORT_UP = 'table/SORT_UP'
export const SORT_DOWN = 'table/SORT_DOWN'
export const FILTER = 'table/FILTER'
export const CURRENT_USER = 'table/CURRENT_USER'

const initialState = {
    table: [],
    currentPage: 1,
    filterTable: null,
    currentUser: null,
    isInit: false,
}

export const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_USER:
            return {
                ...state,
                currentUser: action.currentUser,
            }
        case FILTER:
            return {
                ...state,
                filterTable: state.table.filter(
                    (element)=>{
                        return (String(element.id).includes(action.filter) || element.firstName.includes(action.filter)
                        || element.lastName.includes(action.filter) || element.email.includes(action.filter)
                        || String(element.phone).includes(action.filter))
                    }
                )
            }
        case SORT_UP:
            let table = state.table
            for( let i = 0; i < table.length - 1 ; i++){
                for (let j =i; j < table.length; j++){
                    if(table[i][action.name] > table[j][action.name]){
                        let el = table[i]
                        table[i] = table[j]
                        table[j] = el
                    }
                }
            }
            return {
                ...state,
                table: table,
            }
        case SORT_DOWN:
            let table2 = state.table
            for( let i = 0; i < table2.length - 1 ; i++){
                for (let j =i; j < table2.length; j++){
                    if(table2[i][action.name] < table2[j][action.name]){
                        let el = table2[i]
                        table2[i] = table2[j]
                        table2[j] = el
                    }
                }
            }
            return {
                ...state,
                table: table2,
            }
        case FETCH_TABLE:
            return {
                ...state,
                table: action.data,
                isInit: true,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        default:
            return state
    }
}

export const setCurrentUser = (currentUser) => ({
    type: CURRENT_USER,
    currentUser,
})

export const filterAC = (filter) => ({
    type: FILTER,
    filter,
})

export const setCurrentPageAC = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
})

const fetchTableAC = (data) => ({
    type: FETCH_TABLE,
    data,
})

export const sortUpAC = (name) => ({
    type: SORT_UP,
    name,
})

export const sortDownAC = (name) => ({
    type: SORT_DOWN,
    name,
})

export const fetchBigTableTC = () => {
    return async (dispatch) => {
        let data = await axios.get('http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D')
        dispatch(fetchTableAC(data.data))
    }
}

export const fetchLittleTableTC = () => {
    return async (dispatch) => {
        let data = await axios.get('http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D')
        debugger
        dispatch(fetchTableAC(data.data))
    }
}