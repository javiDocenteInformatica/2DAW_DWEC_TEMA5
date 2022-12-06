<section>
  <h1>AJAX</h1>
  <h2>¿Qué es AJAX?</h2>
  <p>AJAX = JavaScript Asincrónico y XML.</p>
  <p>AJAX no es un lenguaje de programación, si no, una técnica que nos permite comunicarnos con el servidor de forma asíncrona.</p>
  <p>AJAX permite que las páginas web se actualicen de forma asíncrona mediante el intercambio de datos con un servidor web en segundo plano. Esto significa que es posible actualizar partes de una página web sin recargar toda la página.</p>
  <p>AJAX solo usa una combinación de:</p>
  <ul>
    <li>Un objeto XMLHttpRequest integrado en el navegador (para solicitar datos de un servidor web)</li>
    <li>JavaScript y HTML DOM (para mostrar o usar los datos)</li>
  </ul>
  <p class="cuadro_amarillo">
    AJAX permite que las páginas web se actualicen de forma asíncrona mediante el intercambio de datos con un servidor web en segundo plano. Esto significa que es posible actualizar partes de una página web sin recargar toda la página.
  </p>
  
  <h2>¿Qué te permite AJAX?</h2>
  <ul>
    <li>Actualizar una página web sin recargar la página</li>
    <li>Solicitar datos de un servidor: después de que se haya cargado la página</li>
    <li>Recibir datos de un servidor: después de que se haya cargado la página</li>
    <li>Enviar datos a un servidor - en segundo plano</li>
  </ul>

  <h2>¿Cómo funciona AJAX?</h2>
  <img src="vista/img/ajax.gif" alt="imagen de AJAX de W3SCHOOL: https://www.w3schools.com/xml/ajax_intro.asp">
  <p></p>
  <div>
    <ol>
      <li>Se produce un evento en una página web (se carga la página, se hace clic en un botón)</li>
      <li>JavaScript crea un objeto XMLHttpRequest</li>
      <li>El objeto XMLHttpRequest envía una solicitud a un servidor web</li>
      <li>El servidor procesa la solicitud</li>
      <li>El servidor envía una respuesta a la página web.</li>
      <li>La respuesta es leída por JavaScript</li>
      <li>JavaScript realiza la acción adecuada (como la actualización de la página)</li>
    </ol>
  </div>
  <ol class="mas_info">
    <li class="tooltip">
      <span class="tooltiptext">tutorialspoint</span>
      <a href="https://www.tutorialspoint.com/ajax/index.htm" target="_blank" >Más información...</a>
    </li>
    <li class="tooltip">
      <span class="tooltiptext">w3school</span>
      <a href="https://www.w3schools.com/xml/ajax_intro.asp" target="_blank">Más información...</a>
    </li>
  </ol>

  <h2>Acceso a través de dominios (Access Across Domains)</h2>
  <ul>
    <li>Por razones de seguridad, los navegadores modernos no permiten el acceso entre dominios.</li>
    <li>Esto significa que tanto la página web como el archivo XML que intenta cargar deben estar ubicados en el mismo servidor.</li>
    <li>Todos los ejemplos en W3Schools abren archivos XML ubicados en el dominio de W3Schools.</li>
    <li>Si desea utilizar el ejemplo anterior en una de sus propias páginas web, los archivos XML que cargue deben estar ubicados en su propio servidor.</li>
  </ul>
  <h2>XMLHttpRequest Object Methods</h2>
  <pre>
    <code class="js">
        // *********************************************************
        // XMLHttpRequest Object Methods
        // *********************************************************
        // Creamos el objeto para gestionar la petición AJAX 'XMLHttpRequest'
        let xmlHttp = new XMLHttpRequest();
        // --------------------
        xmlHttp.abort(); //Cancela la solicitud actual
        // --------------------
        xmlHttp.getAllResponseHeaders(); // Devuelve información de encabezado
        // --------------------
        xmlHttp.getResponseHeader();// Devuelve información de encabezado específica
        // --------------------
        /*
        Especifica la solicitud:
        - método: el tipo de solicitud GET o POST
        - url: la ubicación del archivo
        - async: verdadero (asincrónico) o falso (sincrónico)
        - usuario: nombre de usuario opcional 
        - psw: contraseña opcional
        */
        let method;
        let url;
        let async;
        let user;
        let psw;
        xmlHttp.open(method,url,async,user,psw);
        // --------------------
        xmlHttp.send(); //Envía la solicitud al servidor. Utilizado para solicitudes GET
        // --------------------
        let string;
        xmlHttp.send(string); //Envía la solicitud al servidor. Utilizado para solicitudes POST
        // --------------------
        xmlHttp.setRequestHeader(); // Agrega un par de etiqueta/valor al encabezado que se enviará
    </code>  
  </pre>

  <h2>XMLHttpRequest Object Properties</h2>

  <pre>
    <code class="js">
      // *********************************************************
      // XMLHttpRequest Object Properties
      // *********************************************************
      // --------------------
      xmlHttp.onreadystatechange; //Define una función que se llamará cuando cambie la propiedad readyState
      // --------------------
      /*
      Contiene el estado de XMLHttpRequest. 
      - 0: solicitud no inicializada
      - 1: conexión de servidor establecida
      - 2: solicitud recibida 
      - 3: solicitud de procesamiento
      - 4: solicitud finalizada y respuesta lista
      */
      xmlHttp.readyState;
      // --------------------
      xmlHttp.responseText; // Devuelve los datos de respuesta como una cadena.
      // --------------------
      xmlHttp.responseXML; // Devuelve los datos de respuesta como datos XML
      // --------------------
      /*
      Devuelve el número de estado de una solicitud.
      - 200: "OK"
      - 403: "Forbidden"
      - 404: "Not Found"
      Para obtener una lista completa, vaya a Http Messages Reference: https://www.w3schools.com/tags/ref_httpmessages.asp
      */
      xmlHttp.status;
      // --------------------
      xmlHttp.statusText; // Devuelve el texto de estado (por ejemplo, "OK" o "Not Found")
      // --------------------
    </code>
  </pre>


</section>
