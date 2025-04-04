

interface DeleteLastButton{
    click:() => void;
}

function DeleteLast({click}:DeleteLastButton){
    return(
        <button className="operationBtn" onClick={()=>click()}>clear</button>
    );
}

export default DeleteLast;  