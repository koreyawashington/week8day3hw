import {useState} from 'react'
import Student from './components/Student'
import Data from './data/Data';
import './App.css';

function App() {
  const [studentData, setStudentData]=useState(Data)
  return (
    <div className="App">
      {studentData.map((student) => {
        return  <Student Data={student}/>
      })}
    </div>
  );
}

export default App;
