/**
 * Funcion que devuelve el tiempo en un formato concreto
 * @date 2022-11-27
 * @returns {string} tiempo
 */
 let getTiempo = ()=>{
  // OBTENER FECHA ACTUAL
  let tiempo = new Date();
  
  // DIA
  let semana = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];
  let diaSemana = semana[tiempo.getDay()];
  let dia = (tiempo.getDate()+1).toString().padStart(2,"0");
  // MES
  let mes = (tiempo.getMonth()+1).toString().padStart(2,"0");
  let mesPalabra = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
  
  // AÑO
  let anyo = tiempo.getFullYear();

  // HORA 
  let hora = tiempo.getHours().toString().padStart(2,"0");
  
  // MINUTOS
  let minutos = tiempo.getMinutes().toString().padStart(2,"0");
  
  // SEGUNDOS
  let segundos = tiempo.getSeconds().toString().padStart(2,"0");

  // TIEMPO CON FORMATO
  let tiempoFormateado = `${diaSemana}, ${dia} de ${mesPalabra[mes]} de ${anyo} - ${hora}:${minutos}:${segundos}`;
  
  // DEVUELVE
  return tiempoFormateado;
};



/**
 * Funcion que lleva la cuenta, segundo a segundo, mostrando la fecha hasta los segundos
 * @date 2022-11-27
 * @returns {void}
 */
function contadorTiempo() {
  
  // 'this': El uso del this aqui es para representar la pagina en la que se esta ejecutando, en este caso concreto en el index.php ya que este script se llama en esa pagina; El 'this' no es necesario, se puede omitir.
  // 'postMessage()': metodo que se utiliza para enviar un mensaje a la pagina HTML.
  this.postMessage(getTiempo());

  // 'setTimeout()': metodo llama a una funcion repetidamente tras cierta cantidad de milisegundos.
  this.setTimeout(()=>{
    contadorTiempo();
  }, 1000);
}

contadorTiempo();




