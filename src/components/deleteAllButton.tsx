

interface DeleteButton{
    click:() => void; 
}

function Delete({click} : DeleteButton){


    return(
        <button className='operationBtn' onClick={() => click()}>C</button>
    );
}

export default Delete;