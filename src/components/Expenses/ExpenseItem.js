import React from 'react'

const ExpenseItem = (props) => {
  return (
    <>
    <div className='expense-item'>
        <div className='exp-item-description'>
            <p>{props.title}            </p>
            <p>{props.amount}            </p>
        </div>
    </div>
    </>
  )
}

export default ExpenseItem