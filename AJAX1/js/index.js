window.addEventListener("load", ()=>{


    // MANEJADOR DE EVENTOS

    

});


    /**
     * Muestra mensajes por consola
     * @date 2022-11-27
     * @param {string} "p_mensaje"
     * @returns {void}
     */
     let f_mensaje_consola = (p_mensaje)=>{

      let htmldeReferencia = document.querySelector("#");

      // parrafo para añadir un mensaje de informacion sobre el Web Worker
      let pHTML_mensaje = document.querySelector("#p_mensaje");

      // Si el elemento html no existe, entonces lo insertamos.
      // Esto lo hacemos para que no se cree el parrafo más de una vez
      if(pHTML_mensaje == null){

        let html_mensaje_click_worker = `<p id="p_mensaje_click_worker" style="color:red">${p_mensaje}</p>`;

        // Añade el mensaje al HTML
        htmldeReferencia.insertAdjacentHTML("afterend", html_mensaje_click_worker);

      }else{
        pHTML_mensaje.innerHTML = p_mensaje;
      }

      console.log(`%c ${p_mensaje}`, `color: red`);
    };