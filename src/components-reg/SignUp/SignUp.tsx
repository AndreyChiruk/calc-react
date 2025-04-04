import {validateName, validateEmail, validatePassword, validatePasswordDouble} from '../validate';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
interface ISignUp{
    isRegister: boolean;
    setReg: (value:boolean) => void; 
    user: {name: string, email: string, password: string};
    setUser: (user: { name: string; email: string; password: string }) => void;
}

function SignUp({isRegister, setReg, setUser}:ISignUp){
    const navigate = useNavigate();
    const [name, nameSet] = useState('');
    const [email, emailSet] = useState('');
    const [password, passwordSet] = useState('');
    const [confirmPassword, confirmPasswordSet] = useState('');
    const handleSubmit = (e:any) => {
        e.preventDefault(e);
        const obj = [
            validateName(name),
            validateEmail(email),
            validatePassword(password),
            validatePasswordDouble(password, confirmPassword),
        ];
        if(!obj.some(x => x == false)){
            setUser({ name: name, email: email, password: password });
            alert(`Вы зарегистрировались! ${name}`);
            setReg(true);
        }
        else{
            if(obj[0] == false){
                alert("Ошибка в имени");
                document.querySelector('#name')?.classList.add('red-border');
            }
            if(obj[1] == false){
                alert("Ошибка в email");
                document.querySelector('#email')?.classList.add('red-border');
            }
            if(obj[2] == false){
                alert("Ошибка в пароле");
                document.querySelector('#password')?.classList.add('red-border');
            }
            if(obj[3] == false){
                alert("Ошибка в повторе пароля");
                document.querySelector('#confirm-password')?.classList.add('red-border');
            }
        }
    }
    const handleError = (x:string) => {
        document.querySelector(`${x}`)?.classList.remove('red-border');
    }
    const handleSignIn = (e:any) => {
        e.preventDefault(e);
        navigate('/sign-in');
    }
    return(
        <div className='SignUp-container'>
            <div className="SignUp-card">
                <h1 className="title">Регистрация</h1>
                <label htmlFor="name">Имя</label>
                <input id="name" type="text" value={name} onChange={(e) => nameSet(e.target.value)} onClick={()=>handleError('#name')} placeholder="Введите ваше имя" />
                
                <label htmlFor="email">Адрес почты</label>
                <input id="email" type="email" value={email} onChange={(e) => emailSet(e.target.value)} onClick={()=>handleError('#email')} placeholder="example@mail.com" />
                
                <label htmlFor="password">Пароль</label>
                <input id="password" type="password" value={password} onChange={(e) => passwordSet(e.target.value)} onClick={()=>handleError('#password')} placeholder="Не менее 8 символов" />
                
                <label htmlFor="confirm-password">Подтверждение пароля</label>
                <input id="confirm-password" type="password" value={confirmPassword} onChange={(e) => confirmPasswordSet(e.target.value)} onClick={()=>handleError('#confirm-password')} placeholder="Повторите пароль" />
                <button type="submit" onClick={handleSubmit}>Зарегистрироваться</button>
                {isRegister ? (
                    <button type="submit" onClick={handleSignIn}>
                        Авторизироваться
                    </button>
                    ) : (
                    <></>
                )}
                
                               
            </div>
        </div>
    );
}
export default SignUp