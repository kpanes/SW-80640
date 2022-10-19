function leer() {
    return document.getElementById("todo").value
}

function agregar() {
    nodo = document.createElement("li")
    // texto = document.CreateTextNode("hola")
    texto = document.createTextNode( leer() )
    console.log(texto)
    nodo.appendChild(texto)
    document.getElementById("lista").appendChild(nodo)
    // buscar por id
    if (document.getElementsByTagName(leer()) == null)
        console.log("no existe")
    else
        alert("ojo! ya existe")
}

function buscarFor() {
    listaTodo = document.getElementsByTagName("li")
    for (let i = 0; i < listaTodo.length; i++) {
        const tarea = listaTodo[i];
        if ( leer() == tarea.textContent)
            console.log("ya existe")
    }
}

function buscarOf() {
    listaTodo = document.getElementsByTagName("li")
    for (const tarea of listaTodo) {
        if (leer() == tarea.textContent)
        console.log("ya existe")
    }
}

function buscar() {
    listaTodo = document.getElementsByTagName("li")
    for (const tarea in listaTodo) {
        if (Object.hasOwnProperty.call(listaTodo, tarea)) {
            console.log(listaTodo[tarea].childNodes[0])
            // if (leer() == tarea.childNodes[0])
            //    console.log("ya existe")
        }
    }    
}