printdocentes(docentes);


let form = document.querySelector("#buscar");

form.onsubmit = async e => {
    e.preventDefault();

    const name = document.querySelector("#name").value;

    
    const response = await fetch("/api/docentes?name=" + name, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();

    printdocentes(data["docentes"]);
}

function crearGUIdocente(docente){

    let html = `
        <div class="card" data-id="` + docente.id + `">
            <h3>` + docente.nombre + `</h3>
            <p>` + docente.email + `</p>
            <p>Especialidad: ` + docente.especialidad + `</p>
            <p>Telefono: ` + docente.telefono + `</p>
            <p>Estado: ` + docente.activo + `</p>
        </div>
    `;

    return html;

}


function printdocentes(docentes){

    let target = document.querySelector(".listadocentes");
    target.innerHTML = "";

    docentes.forEach((c) => {
        target.innerHTML += crearGUIdocente(c)
    });

}

const btn_reiniciar = document.querySelector("#btn_reiniciar");

btn_reiniciar.onclick = async e => {
    e.preventDefault();

    try{
        const response = await fetch("/api/docentes", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        const data = await response.json();

        if(response.ok){
            printdocentes(data);
            return;
        }

        console.error("Error: ", docentes.error)
    }catch (error){
        console.log(error.message);
    }
}