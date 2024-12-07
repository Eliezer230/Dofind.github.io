

function cambio_2() {
	var cambio = document.getElementById("contenedor_3");
	cambio.innerHTML = `
	<h2 class="a" style="text-align: left; display: inline-block; " onclick="cambio_1()">Misión</h2>

  	<h2 class="b" style="display: inline-block; background: #F2A007; color: white; box-shadow: 2px 2px 2px 2px rgba(22, 33, 44, 0.2); border-radius: 50px;"  onclick="cambio_2() ">Visión</h2>
     <header id="texto" class="texto" style="margin-top: 20px;">
     	<p class="palabra_1">"Ofrecer soluciones de calidad y conveniencia para los hogares de la isla y crear oportunidades laborales flexibles para trabajadores independientes"</p>
     </header>
	`;
	var boton = document.getElementById("")

}

function cambio_1(){
	var cambio = document.getElementById("contenedor_3");
	cambio.innerHTML= `
     <h2 class="a" style="text-align: left; display: inline-block; background: #F2A007; color: white; box-shadow: 2px 2px 2px 2px rgba(22, 33, 44, 0.2);" onclick="cambio_1()">Misión</h2>

  	<h2 class="b" style="display: inline-block;" onclick="cambio_2()">Visión</h2>
     <header id="texto" class="texto" style="margin-top: 20px;">
     	<p class="palabra_1">"Transformar los servicios del hogar en experiencias simples y confiables, ayudando a las personas a ahorrar tiempo mientras cuidamos de sus espacios."</p>
     </header>
	`;
}

/*tocado 1*/

function tocado(){
    var hola = document.getElementById("accion");
    hola.innerHTML= `
       <div class="contenedor" id="contenedor">
          <img class="no" id="no" src="x.svg" onclick="cerrar()">
          <img class="katalina" src="Gris.jpeg">
          <h5>Dirección General</h3>
          <p class="mikaela" >Una directora general (CEO) se encarga de establecer la visión, misión y estrategias de la empresa, tomar decisiones cruciales sobre inversiones y alianzas, gestionar los recursos financieros y humanos, liderar al equipo ejecutivo y representar a la empresa frente a inversionistas, medios de comunicación y otras partes interesadas.</p>
       </div>
    `;

    var hello = document.getElementById("q");
    hello.style.animationName= "hola";

    var eliezer = document.getElementById("c");
    eliezer.style.animationName= "hola";

    var andrea = document.getElementById("d");
    andrea.style.animationName= "hola";

    var epale = document.getElementById("texto");
    epale.style.animationName= "hola";
}

/*cerrar*/

function cerrar(){
	var hola = document.getElementById("accion");
    hola.innerHTML= `
       
    `;

    var hello = document.getElementById("q");
    hello.style.animationName= "show";

    var eliezer = document.getElementById("c");
    eliezer.style.animationName= "show";

    var andrea = document.getElementById("d");
    andrea.style.animationName= "show";

    var epale = document.getElementById("texto");
    epale.style.animationName= "show";
}

/*tocado 2*/

function tocado_2(){
    var hola = document.getElementById("accion");
    hola.innerHTML= `
       <div class="contenedor" id="contenedor">
          <img class="no" id="no" src="x.svg" onclick="cerrar()">
          <img class="katalina" src="ro.jpg">
          <h5>Operaciones</h3>
          <p class="mikaela" >Las personas que trabajan en operaciones de una empresa se encargan de coordinar y supervisar las actividades diarias para asegurar que todos los procesos funcionen de manera eficiente y efectiva. Esto incluye gestionar la producción, el inventario, la logística y la calidad del servicio o producto</p>
       </div>
    `;

    var hello = document.getElementById("q");
    hello.style.animationName= "hola";

    var eliezer = document.getElementById("c");
    eliezer.style.animationName= "hola";

    var andrea = document.getElementById("d");
    andrea.style.animationName= "hola";

    var epale = document.getElementById("texto");
    epale.style.animationName= "hola";
}

/*tocado 3*/

function tocado_3(){
    var hola = document.getElementById("accion");
    hola.innerHTML= `
       <div class="contenedor" id="contenedor">
          <img class="no" id="no" src="x.svg" onclick="cerrar()">
          <img class="katalina" src="ana.jpg">
          <h5>Atención al Cliente</h3>
          <p class="mikaela" >Las personas que trabajan en atención al cliente son fundamentales para el éxito de una empresa, ya que actúan como el primer punto de contacto entre la empresa y sus clientes. Su rol incluye resolver consultas y problemas, brindar soporte técnico, y garantizar una experiencia positiva para el cliente.</p>
       </div>
    `;

    var hello = document.getElementById("q");
    hello.style.animationName= "hola";

    var eliezer = document.getElementById("c");
    eliezer.style.animationName= "hola";

    var andrea = document.getElementById("d");
    andrea.style.animationName= "hola";

    var epale = document.getElementById("texto");
    epale.style.animationName= "hola";
}

/*tocado 4*/

function tocado_4(){
    var hola = document.getElementById("accion");
    hola.innerHTML= `
       <div class="contenedor" id="contenedor">
          <img class="no" id="no" src="x.svg" onclick="cerrar()">
          <img class="katalina" src="ra.jpg">
          <h5>Marketing y finanzas</h3>
          <p class="mikaela" >La persona del equipo de marketing se encarga de crear estrategias para promover los productos o servicios de la empresa, aumentar la visibilidad de la marca y atraer a nuevos clientes. Por otro lado, la persona del equipo de finanzas gestiona los recursos financieros de la empresa.</p>
       </div>
    `;

    var hello = document.getElementById("q");
    hello.style.animationName= "hola";

    var eliezer = document.getElementById("c");
    eliezer.style.animationName= "hola";

    var andrea = document.getElementById("d");
    andrea.style.animationName= "hola";

    var epale = document.getElementById("texto");
    epale.style.animationName= "hola";
}

/*tocado 5*/

function tocado_5(){
    var hola = document.getElementById("accion");
    hola.innerHTML= `
       <div class="contenedor" id="contenedor">
          <img class="no" id="no" src="x.svg" onclick="cerrar()">
          <img class="katalina" src="Eliezer.jpeg">
          <h5>Tecnología</h3>
          <p class="mikaela" >Una persona encargada de la tecnología en una empresa, específicamente de la interfaz de la app y del sitio web, se dedica a diseñar, desarrollar y mantener la experiencia del usuario en ambas plataformas. Su rol incluye asegurar la funcionalidad y estética de las interfaces, optimizar la navegación y usabilidad</p>
    `;

    var hello = document.getElementById("q");
    hello.style.animationName= "hola";

    var eliezer = document.getElementById("c");
    eliezer.style.animationName= "hola";

    var andrea = document.getElementById("d");
    andrea.style.animationName= "hola";

    var epale = document.getElementById("texto");
    epale.style.animationName= "hola";
}