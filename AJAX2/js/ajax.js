window.onload = (evento) => {
  let boton = document.querySelector("#boton");
  boton.addEventListener("click", (evento) => {
    f_loadDoc();
  });
};

let f_loadDoc = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    let objeto = JSON.parse(this.responseText);

    document.getElementById("demo").innerHTML += f_objeto_toString(objeto);
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
