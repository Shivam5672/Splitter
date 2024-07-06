import React from 'react';
import './App.css';
import { Input } from './components/Input';
import { Output } from './components/Output';

export default function App() {
  return (
    <>
      <div className='App'>
        <h1>Spli</h1>
        <h1>tter</h1>
        <div className='container'>
            <Input/>
            <Output/>
        </div>
      </div>
    </>
  )
}