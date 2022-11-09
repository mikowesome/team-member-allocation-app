import React from 'react';
import './App.css';
import { EmployeesContextProvider } from './context/EmployeesContext';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import GroupedTeamMembers from './routes/GroupedTeamMembers';
import NotFound from './routes/NotFound';


function App() {
  return (
    <EmployeesContextProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='GroupedTeamMembers' element={<GroupedTeamMembers />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </EmployeesContextProvider>
  );
}

export default App;
