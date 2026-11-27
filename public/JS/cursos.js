printCursos(cursos);


let form = document.querySelector("#buscar");

form.onsubmit = async e => {
    e.preventDefault();

    const name = document.querySelector("#name").value;

    
    const response = await fetch("/api/cursos?name=" + name, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();

    printCursos(data["cursos"]);
}

function crearGUICurso(curso){

    let html = `
        <div class="card" data-id="` + curso.id + `">
            <h3>` + curso.nombre + `</h3>
            <p>` + curso.descripcion + `</p>
            <p>Horario: ` + curso.horario + `</p>
            <p>Fecha de inicio: ` + curso.fecha_inicio + `</p>
            <p>Fecha de fin: ` + curso.fecha_fin + `</p>
            <p>Plazas: ` + curso.plazas + `</p>
            <p>En el aula: ` + curso.id_aula + `</p>
            <p>Estado: ` + curso.estado + `</p>
        </div>
    `;

    return html;

}


function printCursos(cursos){

    let target = document.querySelector(".listaCursos");
    target.innerHTML = "";

    cursos.forEach((c) => {
        target.innerHTML += crearGUICurso(c)
    });

}

const btn_reiniciar = document.querySelector("#btn_reiniciar");

btn_reiniciar.onclick = async e => {
    e.preventDefault();

    try{
        const response = await fetch("/api/cursos", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        const data = await response.json();

        if(response.ok){
            printCursos(data);
            return;
        }

        console.error("Error: ", cursos.error)
    }catch (error){
        console.log(error.message);
    }
}