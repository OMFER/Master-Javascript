/*=============================================
Objeto con las propiedades del mouse
=============================================*/

var pm = {

    zona: document.querySelector("#efectoMouse"),
    figuras: document.querySelectorAll("#efectoMouse figure"),
    mouseX:  0,
    mouseY:  0,
    horizontal: true,
    vertical: false
}

/*=============================================
Objeto con los métodos del mouse
=============================================*/


var mm = {

    inicioMouse: function () {
        pm.zona.addEventListener("mousemove", mm.movimientoMouse);
        for(var i=0; i < pm.figuras.length; i++){
            pm.figuras[i].innerHTML = '<img src="img/mouse/plano0' + i + '.png">';
            pm.figuras[i].style.zIndex = -i;
        }

        /*Había que configurar la altura de la caja de manera dinámica, pero de manera inmediata JavaScript manda la altura como 0, por eeso el timeout*/
        setTimeout(function(){
            pm.zona.style.height = pm.figuras[0].childNodes[0].height + "px";
        }, 100)
        
    },

    movimientoMouse: function(mouse){

        pm.mouseX = mouse.offsetX;
        pm.mouseY = mouse.offsetY;

        for(var i=0; i < pm.figuras.length; i++){

            /*pm.figuras[i].style.left = pm.mouseX / (i * 100 + 50) + "%";*/
            if(pm.horizontal)
            pm.figuras[i].style.left = -pm.mouseX / ((i + 1)  * 100) + "%";
            
            if(pm.vertical)
            pm.figuras[i].style.top = pm.mouseY / ((i + 1)  * 100) + "%";
        }

    }

}

mm.inicioMouse();