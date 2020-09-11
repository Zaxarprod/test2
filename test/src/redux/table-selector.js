

export const getTableSelector = (state) =>{
    return state.table.table
}

export const getFilterTableSelector = (state) =>{
    return state.table.filterTable
}

export const getCurrentUserSelector = (state) =>{
    return state.table.currentUser
}

export const getIsInitSelector = (state) =>{
    return state.table.isInit
}

export const getCurrentPageSelector = (state) =>{
    return state.table.currentPage
}