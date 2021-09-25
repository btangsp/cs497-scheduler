import React from 'react';
import { useData } from './utilities/firebase.js';
import { addScheduleTimes } from './utilities/times.js';
import './App.css';
import CourseList from './components/CourseList';

const Banner = ({ title }) => (
  <h1>{ title }</h1>
);

const App = () => {
  const [schedule, loading, error] = useData('/schedule', addScheduleTimes); 
  
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading the schedule...</h1>

  return (
    <div className="container">
      <Banner title={ schedule.title } />
      <CourseList courses={ schedule.courses } />
    </div>
  );  
};

export default App;
