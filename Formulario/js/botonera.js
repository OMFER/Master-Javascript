/*=============================================
Objeto con las propiedades del scroll
=============================================*/

var pb = {
    posicionScroll: 0,
    botonera: document.querySelectorAll("nav ul li a"),
    ruta: null,
    intervalo: null,
    destinoScroll: 0
}

/*=============================================
Objeto con las propiedades del scroll
=============================================*/

var mb = {

    inicioBotonera: function(){

        pb.posicionScroll = window.pageYOffset;

        for(var i = 0; i < pb.botonera.length; i++){

            pb.botonera[i].addEventListener("click", mb.desplazamiento)
        }
    },

    desplazamiento: function(ruta){

        ruta.preventDefault();
        /*console.log("ruta", ruta.target.getAttribute("href")); /*para encontrar la tiqueta de los botones*/
        pb.ruta = ruta.target.getAttribute ("href");

        pb.destinoScroll = document.querySelector(pb.ruta).offsetTop /*- (pb.padding)*/;

        pb.intervalo = setInterval(function(){

            if(pb.posicionScroll < pb.destinoScroll){
                pb.posicionScroll+= 75;

                if(pb.posicionScroll >= pb.destinoScroll){
                    pb.posicionScroll = pb.destinoScroll;
                    clearInterval(pb.intervalo)
                }
            }else{
                pb.posicionScroll-= 75;

                if(pb.posicionScroll <= pb.destinoScroll){
                    pb.posicionScroll = pb.destinoScroll;
                    clearInterval(pb.intervalo)
                }
            }

            window.scrollTo(/*x*/0,/*y*/pb.posicionScroll);
        },);

    }

}

mb.inicioBotonera();