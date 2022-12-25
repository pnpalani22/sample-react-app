import './App.css';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Login from './components/login';
import ViewEmployee from './components/view-employee';
import AddNewEmployee from './components/add-new-employee';
import { CssBaseline } from '@mui/material';
function App() {
  return (
      <>
    <BrowserRouter >
        <CssBaseline />
        <Routes>
        <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
        <Route path="/dashboard"  element={<ViewEmployee />} />
        <Route path="/addEmployee" element={<AddNewEmployee/>} />
        </Routes>
    </BrowserRouter>
      </>
  );
}

export default App;
