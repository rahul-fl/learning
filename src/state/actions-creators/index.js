export const addMoney= (amount) =>{
    return (dispatch)=>{
        dispatch({
            type: 'deposite',
            payload: amount
        })
    }
}

export const subtractMoney= (amount)=>{
    return (dispatch)=>{
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}