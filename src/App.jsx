/* 
  File Name: App.jsx
  Student’s Name: Lagrange
  StudentID: 301229509
  Date: 05/20/2024
*/
import './App.css'
import { BrowserRouter as Router} from 'react-router-dom';
import MainRouter from './MainRouter.jsx';

function App() {

  return (
    <>
      <Router>
        <MainRouter />
      </Router>
      <h1>Baked Salmon</h1>
    </>
  )
}

export default App
