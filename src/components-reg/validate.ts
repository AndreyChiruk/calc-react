export const validateName = (name:string) :boolean => {
    return /^[a-zA-Zа-яА-ЯёЁ\s]{2,50}$/.test(name);
}
export const validateEmail = (email:string) :boolean => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) && email.length > 0;
}
export const validatePassword = (password:string) :boolean => {
    const englishLowercase:string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const englishUppercase:string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const russianLowercase:string[] = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н',
            'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];

    const russianUppercase:string[] = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н',
            'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];
    const numbers:string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];  
    return /[\S]{8,}/.test(password) 
        && password.length > 0 
        && password.split('').some(x  => [...englishUppercase, ...russianUppercase].includes(x))
        && password.split('').some(x  => [...englishLowercase, ...russianLowercase].includes(x))
        && password.split('').some(x  => [...numbers].includes(x));
}
export const validatePasswordDouble = (password1:string, password2:string) :boolean => {
    return password1 == password2;
}