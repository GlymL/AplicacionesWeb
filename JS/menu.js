let btn_menu = document.querySelector("#btn_menu");

btn_menu.onclick = e => {
    let nav = document.querySelector("#menu");

    nav.classList.toggle("trans");
    if(nav.classList.contains("show")){
        setTimeout(e => {
            nav.classList.remove("show");
        }, 500)
    }else{
        nav.classList.add("show");
    }
}