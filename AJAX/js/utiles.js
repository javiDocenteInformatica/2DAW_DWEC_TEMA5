// Espera a que cargue el contenido del HTML
window.addEventListener("load", ()=>{
  
});


 /**
     * Muestra mensajes por consola
     * @date 2022-11-27
     * @param {string} "p_mensaje"
     * @returns {void}
     */
  let f_mensaje_consola = (p_mensaje)=>{

    let htmldeReferencia = document.querySelector("#contenedor_ajax");

    // parrafo para añadir un mensaje de informacion sobre el Web Worker
    let pHTML_mensaje = document.querySelector("#p_mensaje");

    // Si el elemento html no existe, entonces lo insertamos.
    // Esto lo hacemos para que no se cree el parrafo más de una vez
    if(pHTML_mensaje == null){

      let html_mensaje = `<p id="p_mensaje" style="color:red">${p_mensaje}</p>`;

      // Añade el mensaje al HTML
      htmldeReferencia.insertAdjacentHTML("afterend", html_mensaje);

    }else{
      pHTML_mensaje.innerHTML = p_mensaje;
    }

    console.log(`%c ${p_mensaje}`, `color: red`);
  };