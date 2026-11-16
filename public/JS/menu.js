let btn_menu = document.querySelector("#btn_menu");

btn_menu.onclick = e => {
    let nav = document.querySelector("#menu");

    nav.classList.toggle("show");
}