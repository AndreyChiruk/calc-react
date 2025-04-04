function Theme(){

    function ThemeReplace(){
        let body = document.querySelectorAll(".body")[0];
        let container = document.querySelectorAll(".container")[0];
        let operationBtn = document.querySelectorAll(".operationBtn");
        let navMenuLi = document.querySelectorAll(".navMenu");
        for(let x of navMenuLi){
            x.classList.toggle("navMenuBlack");
        }
        for(let x of operationBtn){
            x.classList.toggle("operationBtn-day");
        }
        let numberBtn = document.querySelectorAll(".numberBtn");
        for(let x of numberBtn){
            x.classList.toggle("numberBtn-day");
        }
        body.classList.toggle('body-day');
        container.classList.toggle('container-day');
        let theme = document.querySelectorAll(".btn-theme")[0];
        theme.classList.toggle('btn-theme-day');
    }

    return( 
        <button className="btn-theme" onClick={ThemeReplace}>Смена темы</button>
    );
}

export default Theme;