import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginRegister from './components/Pages/LoginRegister/LoginRegister';
import Home from './components/Home/Home';
import Channel from './components/Admin/Channel/Channel';
import Account from './components/Admin/Account/Account';
import Table from './components/Pages/Sample/Table';
import Sample from "./components/Pages/Sample/Sample";
import Modal from './components/Pages/Sample/Modal/Modal';
import AccountForm from './components/Admin/Account/Accountforms/Accounforms';
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path="/home" element={<Home />} />
        <Route path="/channel" element={<Channel />} />
        <Route path="/account" element={<Account />} />
        <Route path="/table" element={<Table />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/accountforms" element={<AccountForm />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);