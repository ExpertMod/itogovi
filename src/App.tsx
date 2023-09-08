import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Input } from '@chakra-ui/react'
import { MainLayout } from './layouts/mainLayout';
import { Routes, Route} from 'react-router-dom';
import { Dashboard } from './pages/dashboard';
import { Tasks } from './pages/allTasks';
import { MainCategories } from './pages/categories';




function App() {
  return (
    <div className="App">
      <MainLayout>
        <Routes>
                <Route path="*" element={<Tasks/>}/>
                <Route path="/" element={<Tasks/>}/>
                <Route path="/tasks" element={<Tasks/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/categories" element={<MainCategories/>}/>
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
