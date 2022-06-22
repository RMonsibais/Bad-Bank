import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import CreateAccount from './pages/CreateAccount';
import SignIn from './pages/SignIn';
import Withdraw from './pages/Withdraw';
import Deposit from './pages/Deposit';
import AllData from './pages/AllData';
import { Container, Row } from 'react-bootstrap';


function App() {
  const [users, setUsers] = useState([]);
  const [currentUserId, setCurrentUserId] = useState();

  const currentUser = users.find((user) => user.id === currentUserId)

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/user")
      const fetchedUsers = await response.json()
      setUsers(fetchedUsers.map((user) => {
        return {
          ...user,
          balance: user.transactions.reduce((acc, transaction) => {
            return acc + transaction.amount
          }, 0)
        }
      }))
    }
    fetchUsers()
  }, [])
  const addUser = async (name, email, password) => {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const newUser = await response.json()
    setUsers([
      ...users,
      {
        ...newUser,
        balance: 0,
        transactions: []
      } 
    ])
    setCurrentUserId(newUser.id)
  }
  const signInUser = async (email, password) => {
    const response = await fetch("/api/user/signin", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (response.ok) {
      const existingUser = await response.json()
      setCurrentUserId(existingUser.id)
    }
    return response.ok
  }
  const logOutUser = () => {
    setCurrentUserId(undefined)
  }
  const adjustUserBalance = async (value) => {
    const loggedInUser = currentUser
    const response = await fetch(`/api/user/${loggedInUser._id}/transaction`, {
      method: "POST",
      body: JSON.stringify({
        amount: value,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const newTransaction = await response.json()
    setUsers(users.map((user) => {
      if (user._id === loggedInUser._id) {
        return {
          ...user,
          transactions: [
            ...user.transactions,
            newTransaction
          ],
          balance: user.balance + newTransaction.amount
        }
      }
      return user
    }))
  }
  let logs = [];

  for (let user of users) {
    logs.push({
      name: user.name,
      email: user.email,
      password: user.password,
      balance: 0,
    });
    let balance = 0;
    for (let transaction of user.transactions) {
      balance += transaction.amount
      logs.push({
        name: user.name,
        email: user.email,
        password: user.password,
        deposit: transaction.amount > 0 ? transaction.amount : undefined,
        withdraw: transaction.amount < 0 ? transaction.amount : undefined,
        balance
      });
    }
  }


  return (
    <Router>
      <Navbar user={currentUser} onLogOut={logOutUser} />
      <Container>
        <Row className="justify-content-center">
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/CreateAccount' element={<CreateAccount addUser={addUser} />} />
            <Route path='/SignIn' element={<SignIn signInUser={signInUser} />} />
            <Route path='/Withdraw' element={<Withdraw onAdjust={adjustUserBalance} user={currentUser} />} />
            <Route path='/Deposits' element={<Deposit onAdjust={adjustUserBalance} user={currentUser} />} />
            <Route path='/AllData' element={<AllData logs={logs} />} />
          </Routes>
        </Row>
      </Container>
    </Router>
  );
}

export default App;