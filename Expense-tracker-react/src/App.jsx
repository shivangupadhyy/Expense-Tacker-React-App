import React from 'react'
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import DarkModeToggle from './components/Toggle';
import ExpenseWarning from './components/ExpenseWarning';
import ChartComponent from './components/ChartComponent';
import './App.css'


function App() {

  return (
    
    <GlobalProvider>
      <DarkModeToggle/>
      <Header/> 
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
        <ExpenseWarning/>
        {/* <div className="chart-container">
        <ChartComponent/>
        </div> */}
      </div>
    </GlobalProvider>
  )
}

export default App
