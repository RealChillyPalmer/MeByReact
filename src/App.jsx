import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';

const projects = [
  {
     title: 'Study Guide',
     image: '',
     deployment: '',
     repo: ''
  },
  {
      title: 'Readme Genie',
      image: '',
      deployment: '',
      repo: '' 
   },
   {
      title: 'AutomoBuild',
      image: '',
      deployment: '',
      repo: '' 
   },
   {
      title: 'Chef Portfolio',
      image: '',
      deployment: '',
      repo: '' 
   },
   {
      title: 'Employee Tracker',
      image: '',
      deployment: '',
      repo: '' 
   },
   {
      title: 'Weather API',
      image: '',
      deployment: '',
      repo: '' 
   },
];


function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
       <ProjectList projects={projects} />

      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
