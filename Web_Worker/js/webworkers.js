let worker; // variable que almacenará el worker. Será global para poder manejarla en las distintas funciones

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
 * Funcion que nos permite INICIAR el Worker
 * @date 2022-11-27
 * @returns {void}
 */
function iniciarWorker() {

    // comprobamos que nuestro navegador tiene soporte para los Workers
    if(typeof(Worker) !== "undefined") {

        if(worker == "undefined") { 
        
        //Creamos un objeto worker con el script que va a ejecutar
        worker = new Worker("js/tiempo.js");
        console.log(worker, typeof worker);

        // Añadimos el evento "message" al objeto worker para que, cuando tenga datos disponibles, los muestre en nuestra página, donde nosotros queramos
        
        worker.addEventListener("message", (evento)=> {
            document.querySelector("#p_tiempo").innerHTML = evento.data;
            console.log(evento, typeof evento);
        });

        // cadena con el mensaje de información sobre el Web Worker
        let mensaje_click_worker = "El webworker ha sido iniciado";    
        f_mensaje_click_webworker(mensaje_click_worker);
        }else{
        // cadena con el mensaje de información sobre el Web Worker
        let mensaje_click_worker = "El webworker ya ha sido iniciado, no se permite iniciar más de una vez";
        
        f_mensaje_click_webworker(mensaje_click_worker);
        }

        
    } else {
        document.querySelector("#p_tiempo").innerHTML = `<span style="color: red;"> Fallo al ejecutar el web worker</span>`;
    }
}


/**
 * Funcion que nos permite DETENER el Worker
 * @date 2022-11-27
 * @returns {void}
 */
function detenerWorker() {
    // Si el worker no ha sido iniciado, no podemos continuar
    if(worker == null){
        console.log(`El worker no está definido: `, worker);
        return;

    }
        
    // 'terminate()': Funcion que finaliza el Web Worker para liberar recursos y parar la accion que lleva a cabo.
    worker.terminate();
    worker = undefined;
    
    // cadena con el mensaje de información sobre el Web Worker
    let mensaje_click_worker = "El webworker ha sido detenido";    
    f_mensaje_click_webworker(mensaje_click_worker);
    
    
    
    
}    

