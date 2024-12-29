import logo from './logo.svg';
import './App.css';
import Users from './Components/UsersComps/Users';
import Todos from './Components/TodosComps/Todos';
import Homepage from './Components/Homepage';
import { Route, Routes } from 'react-router-dom';
import Posts from './Components/PostsComp/Posts';

function App() {
  return (
    <>
      <Homepage />
      <Routes>
        <Route path="/users" element={<Users/>}/>
        <Route path="/Posts" element={<Posts/>}/>
        <Route path="/Todos" element={<Todos/>}/>
      </Routes>
    </>
  );
}

export default App;
