import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import SignUp from './components-reg/SignUp/SignUp';
import SignIn from './components-reg/SignIn/SignIn';
import ResetPassword from './components-reg/ResetPassword/ResetPassword';
import InitCalc from './components/initCalc';
import {useState} from 'react';

function App() {
  const [isRegister, setReg] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email:'',
    password:''
  });
  return (
    <Router>
        <div className="body">
            <div className="navigation-container"> 
                <div className="navigation"> 
                    <ul>
                        <li className='navMenu'><Link to="/sign-up" onClick={() => {window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}}>Форма для регистрации нового пользователя</Link></li>
                        <li className='navMenu'><Link to="/sign-in" onClick={() => {window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}}>Форма для авторизации пользователя</Link></li>
                        <li className='navMenu'><Link to="/reset-password" onClick={() => {window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}}>Форма для восстановления пароля</Link></li>
                    </ul>
                </div>
            </div>
            <button className="scroll-top-button" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth'})}}>UP</button>
        </div>

        <Routes>
            <Route path="/sign-up" element={<SignUp isRegister={isRegister} setReg={setReg} user={user} setUser={setUser}/>} />
            <Route path="/sign-in" element={<SignIn isRegister={isRegister} setReg={setReg} user={user} setUser={setUser}/>} />
            <Route path="/reset-password" element={<ResetPassword isRegister={isRegister} setReg={setReg} user={user} setUser={setUser}/>} />
            <Route path="/user" element={<InitCalc />} />
        </Routes>
    </Router>
  );
}

export default App;