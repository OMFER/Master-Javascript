/*Objeto con las propiedades del slide*/

var p = {
    paginacion: document.querySelectorAll("#paginacion li"),
    pagina: 0,
    cajaSilde: document.querySelector("#slide ul"),
    animacionSlide: "slide",
    imgSlide: document.querySelectorAll("#slide ul li"),
    avanzar: document.querySelector("#slide #avanzar"),
    retroceder: document.querySelector("#slide #retroceder"),
    velocidadSlide: 2500,
    formatearLopp: false
}

/*Objeto con los métodos del slide*/


var m = {

    inicioSlide: function(){
        for(var i=0; i<p.paginacion.length;i++){

            p.paginacion[i].addEventListener("click", m.paginacionSlide);
            p.imgSlide[i].style.width = (100 / p.paginacion.length) + "%";

        }

        p.avanzar.addEventListener("click", m.avanzar);
        p.retroceder.addEventListener("click", m.retroceder);

        m.intervalo();

        p.cajaSilde.style.width = (p.paginacion.length * 100) + "%" ;
        p.imgSlide.style.width = (100 / p.paginacion.length) + "%";
    },

    paginacionSlide: function(pagina){
        p.pagina = pagina.target.parentNode.getAttribute("pagina")-1;
        m.movimientoSlide(p.pagina);
    },

    avanzar: function() {

        if (p.pagina == p.imgSlide.length-1){
            p.pagina = 0;
        } else{
            p.pagina++;
        }
        
        m.movimientoSlide(p.pagina);
    },

    retroceder: function() {

        if (p.pagina == 0){
            p.pagina = p.imgSlide.length-1;
        } else{
            p.pagina--;
        }

        m.movimientoSlide(p.pagina);
    },

    movimientoSlide: function(pagina){

        p.formatearLopp = true;

        p.cajaSilde.style.left = pagina * -100 + "%";

        for(var i=0; i<p.paginacion.length;i++){
            p.paginacion[i].style.opacity = .5;
        }

        p.paginacion[pagina].style.opacity = 1;

        if(p.animacionSlide == "slide"){
            p.cajaSilde.style.transition = ".7s left ease-in-out";
        }else 
            if (p.animacionSlide == "fade"){
               
                p.imgSlide[pagina].style.opacity = 0;
                p.imgSlide[pagina].style.transition = ".7s opacity ease-in-out";

                setTimeout(function(){
                    p.imgSlide[pagina].style.opacity = 1;
                },500)

            }
        },

        intervalo:function() {

            setInterval(function(){
                if(p.formatearLopp){
                    p.formatearLopp = false;
                } else{
                    m.avanzar();
                }
            },p.velocidadSlide)
            
        }

}

m.inicioSlide();