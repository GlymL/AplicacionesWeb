let btn_menu = document.querySelector("#btn_menu");

btn_menu.onclick = e => {
    let lista_menu = document.querySelector("#lista_menu");
    console.log(lista_menu);

    if (lista_menu.style.display === "block") {
        lista_menu.style.display = "none";
    } else {
        lista_menu.style.display = "block";
    }
}