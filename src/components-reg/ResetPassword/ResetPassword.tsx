import {validateEmail} from '../validate';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
interface IResetPassword{
    isRegister: boolean;
    setReg: (value:boolean) => void; 
    user: {name: string, email: string, password: string};
    setUser: (user: { name: string; email: string; password: string }) => void;
}
function ResetPassword({isRegister, user}:IResetPassword){
    const navigator = useNavigate();
    const [email, setEmail] = useState('');
    const handleGetPass = () => {
        if(isRegister && validateEmail(email)){
            if(email == user.email){
                alert(`Ваш пароль ${user.password}`);
                navigator('/sign-up');
            }
            else{
                alert(`Не существующий email`);
                document.querySelector('#email')?.classList.add('red-border');
            }
        }
        else{
            alert(`Вы не зарегистрированы или email не прошел валидацию`);
            document.querySelector('#email')?.classList.add('red-border');
        }
    }
    const handleError = (x:string) => {
        document.querySelector(`${x}`)?.classList.remove('red-border');
    }
    return(
        <div className='ResetPassword-container'>
            <div className="ResetPassword-card">
                <h1 className="title">Восстановление пароля</h1>
                <p className="helper-text">Введите email, указанный при регистрации</p>
                
                <label htmlFor="email">Адрес почты</label>
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} onClick={()=>handleError('#email')} placeholder="example@mail.com"/>
                
                <button type="submit" onClick={handleGetPass}>Восстановить</button>
            </div>
        </div>
    );
}
export default ResetPassword;