import React from 'react'
import Card from '../UI/Card/Card'
import ExpenseItem from './ExpenseItem'

const Expenses = () => {
  return (
    <>
         <Card>
        <ExpenseItem>
            
            <ExpenseItem title="Books" amount="Rs. 1000">
                
        </ExpenseItem>
       
            {/* <p>Heading 1</p>
            <p>Heading 2 as Card Children</p> */}
        </Card>

    </>
  )
}

export default Expenses