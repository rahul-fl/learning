import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../state/index'
import { bindActionCreators } from 'redux';

export default function UserAction() {
    const dispatch = useDispatch();
    const {subtractMoney, addMoney} = bindActionCreators(actionCreators, dispatch)
  return (
    <div>
        <button onClick={()=>{subtractMoney(100)}}>-</button>
        <span> Add or Subtract </span>
        <button onClick={()=>{addMoney(100)}}>+</button>
    </div>
  )
}
