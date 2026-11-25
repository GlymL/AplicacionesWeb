let form = document.querySelector("#buscar");

form.onsubmit = async e => {
    e.preventDefault();

    const name = document.querySelector("#name").value;

    
    const response = await fetch("http://localhost:3000/api/cursos/buscar", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "name": name })
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
            <p>Horario: ` + curso.horario + `</p>
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
        if(c.estado == "activo")
            target.innerHTML += crearGUICurso(c)
    });

}

