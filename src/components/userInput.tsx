

interface Text{
    text:string;
}

function Input({ text } : Text){
    return(
        <textarea className="userInput" value={text}></textarea>
    );
}

export default Input;