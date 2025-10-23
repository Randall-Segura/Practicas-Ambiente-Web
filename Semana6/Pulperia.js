document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("sinProductos").style.display="block";

    let clicks=0;
    const facturacion=document.getElementById("facturacion");
    const boton=document.getElementById("btn1");
    const contadorClicks=document.getElementById("contador");

    boton.addEventListener("click", function(){
        clicks++;

    })



    document.querySelector(".btn.total").addEventListener("click", function(){
        let PrecioKSI=document.getElementById("PrecioKSI").innerText;
        let precio=parseInt(PrecioKSI) || 0;
        let total=precio* clicks;
        facturacion.innerText= total;
    })


    







})