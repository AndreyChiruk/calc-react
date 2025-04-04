

interface PointButton{
    type:string;
    click:(elem:string) => void;
}

function Point({type, click} : PointButton){

    return(
        <button className="operationBtn" onClick={() => click(type)}>.</button>
    );
}

export default Point;