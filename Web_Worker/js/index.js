window.addEventListener("load", ()=>{


    // MANEJADOR DE EVENTOS

    // Evento click para boton iniciar worker
    document.querySelector("#btn_iniciarWorker").addEventListener("click", (evento)=>{
      iniciarWorker();
    });

    
    // Evento click para boton detener worker
    document.querySelector("#btn_detenerWorker").addEventListener("click", (evento)=>{
      detenerWorker();
    });   

});


    /**
     * Muestra mensaje de error si se intenta iniciar más de una vez el Web Worker
     * @date 2022-11-27
     * @param {string} "mensaje_click_worker"
     * @returns {void}
     */
     let f_mensaje_click_webworker = (p_mensaje_click_worker)=>{

      // parrafo para añadir un mensaje de informacion sobre el Web Worker
      let pHTML_mensaje_click_worker = document.querySelector("#p_mensaje_click_worker");

      // Si el elemento html no existe, entonces lo insertamos.
      // Esto lo hacemos para que no se cree el parrafo más de una vez
      if(pHTML_mensaje_click_worker == null){

        let html_mensaje_click_worker = `<p id="p_mensaje_click_worker" style="color:red">${p_mensaje_click_worker}</p>`;

        // Mensaje que muestra que el worker ya está lanzado y en funcionamiento
        btn_limpiarConsola.insertAdjacentHTML("afterend", html_mensaje_click_worker);

      }else{
        pHTML_mensaje_click_worker.innerHTML = p_mensaje_click_worker;
      }

      console.log(`%c ${p_mensaje_click_worker}`, `color: red`);
    };