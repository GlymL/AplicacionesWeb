const Estados = {
    INACTIVO: 0, ACTIVO: 1
}

const cursos = [
    {
        id: 1,
        nombre: "Nombre descriptivo",
        descripcion: "Descripcion del nombre, con todas sus cosas y tal y cual",
        horario: "De tarde",
        plazas: 10,
        estado: Estados.ACTIVO
    },
    {
        id: 2,
        nombre: "Nombre muy descriptivo",
        descripcion: "Descripcion del  muy descriptivo nombre, con todas sus cosas y tal y cual",
        horario: "De mañana",
        plazas: 15,
        estado: Estados.ACTIVO
    },
    {
        id: 3,
        nombre: "Nombre extremadamente descriptivo",
        descripcion: "Esto es una descripcion del nombre, con todas sus cosas y tal y cual",
        horario: "De madrugada",
        plazas: 20,
        estado: Estados.ACTIVO
    }
]

const plantilla = {
        id: 0,
        nombre: "Nombre descriptivo",
        descripcion: "Descripcion del nombre, con todas sus cosas y tal y cual",
        horario: "De tarde",
        plazas: 10,
        estado: Estados.ACTIVO
    }


let target = document.querySelector(".listaCursos");

function crearGUICurso(curso){

    let html = `
        <div class="card" data-id="` + curso.id + `">
            <h3>`+ curso.nombre +`</h3>
            <p>`+ curso.descripcion +`</p>
            <p>`+ curso.horario +`</p>
            <p>`+ curso.plazas +`</p>
            <p>`+ curso.estado +`</p>
        </div>
        `;

    return html;
}

cursos.forEach((c) => {
    if(c.estado == Estados.ACTIVO)
        target.innerHTML += crearGUICurso(c);
})

let btn_ordenar = document.querySelector("#btn_ordenar");

btn_ordenar.onclick = e => {
    cursos.sort((a, b) => a.nombre.localeCompare(b.nombre));

    console.log(cursos);

    target.innerHTML = "";
    cursos.forEach((c) => {
        if(c.estado == Estados.ACTIVO)
            target.innerHTML += crearGUICurso(c);
    })
}

let btn_borrar = document.querySelector("#btn_borrar");
btn_borrar.onclick = (e) => {
    for(let i = cursos.length - 1; i >= 0; i--){
        if(cursos[i].estado == Estados.ACTIVO){
            cursos[i].estado = Estados.INACTIVO;
            break;
        }
    }

    target.innerHTML = "";
    cursos.forEach((c) => {
        if(c.estado == Estados.ACTIVO)
            target.innerHTML += crearGUICurso(c);
    })
}

let btn_crear = document.querySelector("#btn_crear");
btn_crear.onclick = (e) => {
    let nCurso = { ...plantilla };
    nCurso.id = cursos.length+1;
    cursos.push(nCurso);

    target.innerHTML = "";
    cursos.forEach((c) => {
        if(c.estado == Estados.ACTIVO)
            target.innerHTML += crearGUICurso(c);
    })
}