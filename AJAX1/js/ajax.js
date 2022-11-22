window.onload = (evento) => {
  let boton = document.querySelector("#boton");
  boton.addEventListener("click", (evento) => {
    f_loadDoc();
  });
};

// Ver Libro página 148: https://sintesis.read.garden/viewer/desarrollo-web-en-entorno-cliente-2-edicion-2/148
let f_loadDoc = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200){
      let objeto = JSON.parse(this.responseText);
      document.getElementById("demo").innerHTML += f_objeto_toString(objeto);
    }else{
      console.log(` xhttp.readyState: ${this.readyState}`);
    }    
  };
  xhttp.open("GET", "json/datos.json");
  xhttp.send();
};

let f_objeto_toString = (p_objeto) => {
  let cadena = `<p>
    ${JSON.stringify(p_objeto)}  
  </p>`;
  return cadena;
};
