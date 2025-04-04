import {validateEmail, validatePassword} from '../validate';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
interface ISignIn{
    isRegister: boolean;
    setReg: (value:boolean) => void; 
    user: {name: string, email: string, password: string};
    setUser: (user: { name: string; email: string; password: string }) => void;
}
function SignIn({isRegister, user}:ISignIn){
    const navigate = useNavigate();
    const [email, emailSet] = useState('');
    const [password, passwordSet] = useState('');
    const handleSubmit = (e:any) => {
            e.preventDefault(e);
            const obj = [
                validateEmail(email),
                validatePassword(password)
            ];
            if(!obj.some(x => x == false)){
                if(user.email == email && user.password == password){
                    alert(`Вы авторизировались! ${user.name}`);
                    navigate("/user");
                }
                else{
                    alert(`Такого пользователя нету`);
                }
            }
            else{
                if(obj[0] == false){
                    alert("Ошибка в email");
                    document.querySelector('#email')?.classList.add('red-border');
                }
                if(obj[1] == false){
                    alert("Ошибка в пароле");
                    document.querySelector('#password')?.classList.add('red-border');
                }
            }
        }
    const handleError = (x:string) => {
        document.querySelector(`${x}`)?.classList.remove('red-border');
    }
    const handleSignUp = (e:any) => {
        e.preventDefault(e);
        navigate("/sign-up");
    }
    const handlePassword = (e:any) => {
        e.preventDefault(e);
        navigate("/reset-password");
    }
    return(
        <div className='SignIn-container'>
            <div className="SignIn-card">
                <h1 className="title">Авторизация</h1>                
                <label htmlFor="email">Адрес почты</label>
                <input id="email" type="email" onChange={(e) => emailSet(e.target.value)} onClick={()=>handleError('#email')} placeholder="example@mail.com" />
                
                <label htmlFor="password">Пароль</label>
                <input id="password" type="password" onChange={(e) => passwordSet(e.target.value)} onClick={()=>handleError('#password')} placeholder="Не менее 8 символов" />
                
                <button onClick={handleSubmit} type="submit">Войти</button>
                {isRegister ? 
                (<></>):
                (<button onClick={handleSignUp} type="submit">Зарегистрироваться</button>)}
                <button onClick={handlePassword} type="submit">Забыли пароль</button>
            </div>
        </div>
    );
}
export default SignIn