

interface ButtonTypes{
    type:string;
    click:(elem:string) => void;
}

function Number({type, click} : ButtonTypes){
    return(
        <button className ="numberBtn" onClick={()=> click(type)}>
            {type}
        </button>
    );
}

export default Number;