/*=============================================
Objeto con las propiedades del scroll
=============================================*/

var ps = {

    posicionScroll: 0,
    articulos: document.querySelectorAll("#scroll article"),
    cajaScroll: document.querySelector("#scroll"),
    header: document.querySelector("header")

}

/*=============================================
Objeto con los métodos del scroll
=============================================*/


var mb = {

    inicioScroll: function(){

        document.addEventListener("scroll", mb.efectoParallax)
    },
    efectoParallax: function(){

        ps.posicionScroll = window.pageYOffset;

        if(ps.posicionScroll > 100){
            ps.header.style.position = "fixed";
            ps.header.style.zIndex = 10;
        }
        else{
            ps.header.style.position = "relative";
            ps.header.style.zIndex = 0;
        }
        
        if(ps.posicionScroll > ps.cajaScroll.pageYOffsetTop){

            for(var i = 0; i < ps.articulos.length;i++){

                ps.articulos[i].style.marginLeft = 0;
            }
        }else{

            for(var i = 0; i < ps.articulos.length;i++){

                ps.articulos[i].style.marginLeft = ps.posicionScroll/25 -100 + "%";
            }
        }
    }

}

mb.inicioScroll();