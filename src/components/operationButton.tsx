

interface ButtonTypes{
    type: string;
    click:(elem: string) => void;
}

function Operator({ type, click }: ButtonTypes){


    return(
        <button className = "operationBtn" onClick={()=>click(type)}>
            {type}
        </button>
    );
}

export default Operator;