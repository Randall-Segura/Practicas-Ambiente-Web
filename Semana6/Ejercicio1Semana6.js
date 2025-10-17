

//Esto significa: Ejecuta este codigo solo cuando el documento HTML este completamente cargado
document.addEventListener("DOMContentLoaded", function () { 
    //Busca el elemento con id mensaje y le aplica el estilo CSS display:none, que oculta el mensaje
    document.getElementById("mensaje").style.display = "none";
    //Cmabia el texto del elemento con id titulo por "Unidad 3". Es util si el titulo debia cambiarse dinamicamente.
    document.getElementById("titulo").innerText = "Unidad 3";
    
    /*
    let nuevoLi = document.createElement("li");
    Se crea un nuevo elemento de la lista
    nuevoLi.innerText = "Conferencias";
    Se le pone al texto "Conferencias"
    document.getElementById("listaActividades").appendChild(nuevoLi);
    Lo agrega al final de la lista con id listaActividades
    */
    let nuevoLi = document.createElement("li");
    nuevoLi.innerText = "Conferencias";
    document.getElementById("listaActividades").appendChild(nuevoLi);


    /*Estos comandos lo que hacen es cambiar los colores de fondo y borde de los elementos
    document.getElementById("actividades").style.backgroundColor = "orange";
    document.getElementById("listaActividades").style.backgroundColor = "orange";
    Los dos anteriores ponen el fondo de actividades y listaActividades de color naranja
    document.getElementById("actividad").style.backgroundColor = "white";
    document.getElementById("actividad").style.borderColor = "violet";
    Los dos anteriores ponen el campo de texto actividad de color blanco con borde violeta
    */

    document.getElementById("actividades").style.backgroundColor = "orange";
    document.getElementById("listaActividades").style.backgroundColor = "orange";
    document.getElementById("actividad").style.backgroundColor = "white";
    document.getElementById("actividad").style.borderColor = "violet";

    //Esto dice: cuando alguien haga click en el boton con id agregarActividades, ejecuta esta funcion
    document.getElementById("agregarActividades").addEventListener("click", function () {
        //Toma lo que el usuario escribio en el campo de texto actividad
        let actividad = document.getElementById("actividad").value;
        //Si el campo no esta vacio
        if (actividad != "") {
            //Crea un nuevo elemento de la lista desde cero
            let nuevoLi = document.createElement("li");
            //Aca se llena ese nuevo <li> con el texto que escribio el usuario en el campo de texto
            nuevoLi.innerText = actividad;
            //Esta linea agrega el nuevo <li> dentro de la lista que tiene el id "listaActividades".
            document.getElementById("listaActividades").appendChild(nuevoLi);
            //Una vez que se agrega la actividad, esta linea borra el texto del campo de entrada, para que el usuario no tenga que hacerlo manualmente
            document.getElementById("actividad").value = "";
            //Esto restaura el color del campo de texto a blanco, por si antes habia quedado en rojo por un error (cuando estaba vacio)
            document.getElementById("actividad").style.backgroundColor = "white";
            //Finalmente, oculta el mensaje de error, porque el usuario ya escribio una actividad valida.
            document.getElementById("mensaje").style.display = "none";
        } else { //Si el campo de texto esta vacio y se acciono el boton
            //Pinta el campo de texto de color rojo
            document.getElementById("actividad").style.backgroundColor = "red";
            //Muestra el mensaje de error 
            document.getElementById("mensaje").style.display = "block";
        }
        console.log(actividad);
    })
})
