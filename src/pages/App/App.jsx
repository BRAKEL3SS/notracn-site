import { useState } from 'react';
import AuthPage from '../Auth/AuthPage';
import NewOrderPage from '../NewOrder/NewOrderPage';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import OrderHistoryPage from '../OrderHistory/OrderHistoryPage';
import Navbar from '../../components/Navbar/Navbar';
import { getUser } from '../../utilities/users-service'

export default function App() {
  const [user, setUser] = useState(getUser())
  return (
    <main className='App'>
      { user ? 
      <>
        <Navbar user={ user } setUser={setUser} />
      <Routes>
        <Route path="/orders/new" element={<NewOrderPage prop="prop"/>}/>
        <Route path="/orders" element={<OrderHistoryPage />} />
      </Routes>
      </>
      :
      <AuthPage setUser={ setUser }/>
      }
    </main>
  );
}


