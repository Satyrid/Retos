
var numeros= new Array();
var imagenes= new Array();
var txts = new Array();

//------------------------------------funtions----------------------------------
const crearLista = function(){
    
      //nodo de numeros
      for (let i = 0; i < numeros.length; i++) {
        Informacion.añadirNodoF(numeros[i]) ;
    }
    numeros=[];
    document.getElementById("nodosIngresados").innerHTML = "";
    
    //nodo de imagenes
    for (let i = 0; i < imagenes.length; i++) {
        Informacion.añadirNodoF(imagenes[i]) ;
      }
    imagenes=[];
    document.getElementById("list").innerHTML = "";

  
    //nodo de txt
    for (let i = 0; i < txts.length; i++) {
        Informacion.añadirNodoF(txts[i]) ;
    }
    txts=[];
    document.getElementById("ver").innerHTML = "";

    
    //modifica el tamaño del el input id posicionN
   modificarPosicionParametros();

}
//
const capturaValorInputAnonima = function() {
    let valoresNodos = document.getElementById("nodos").value;
    var numerosP = valoresNodos.split(",");
    parseInt(numerosP);
    numeros = [];
    /* ----agrega al arreglo de numeros----- */
    for (let i = 0; i < numerosP.length; i++) {
      numeros.push(numerosP[i])
    }
    document.getElementById("nodosIngresados").innerHTML = valoresNodos;

};

function modificarPosicionParametros(params) {
    document.getElementById("posicionN").setAttribute("max", ""+(Informacion.length-1));
    let inputNombre = document.getElementById("posicionN");
    inputNombre.value = "";
    document.getElementById("posicionN").setAttribute("placeholder","max: "+(Informacion.length-1));
    console.log(Informacion);
}

//------------------------------------------------------------------------------------
function lista() {
    let Seleccion = document.getElementById("functionSelected");
    var seleccionDato = Seleccion.options[Seleccion.selectedIndex].value;
    
        //burbuja
    if(seleccionDato=="1"){  añadirNodoLlamdo(); }else 
    if(seleccionDato=="2"){eliminarNodoLlamdo(); }else
    if(seleccionDato=="3"){consultarValorDelNodoLLamdo(); }else
    if(seleccionDato=="4"){eliminarNodoPosicionLlamado(); }else
    if(seleccionDato=="5"){eliminarPorVolorLlamdo(); }else
    if(seleccionDato=="6"){modificarValorDeterminadoLlamdo(); }else
    if(seleccionDato=="7"){añadirNodoEnPosicionLlamdo(); }else
    if(seleccionDato=="8"){invertirLlamado(); }
    
    //modifica el tamaño del el input id posicionN
    modificarPosicionParametros();
    mostrarLista();
    
}    
 // crear tabla
  /*
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode("Hola!¿Qué tal?");
  newDiv.appendChild(newContent); //añade texto al div creado.

  // añade el elemento creado y su contenido al DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);

  uso de insertAdjacentElement
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
 */
function mostrarLista() {
borrarLista();
valores=Informacion.imprimirArrayList();
  for (let i = Informacion.length-1; i > -1; i--) {
    let fila = document.createElement("tr");
    let columna1 = document.createElement("td");
    let columna2 = document.createElement("td");

    /* agregacion de datos a las columnas */
    let posicion =  document.createTextNode(""+i);
    let valor   =document.createTextNode(""+valores[i]);

    fila.setAttribute("id","a"+i)
    columna1.appendChild(posicion);
    columna2.appendChild(valor);



    let tabla = document.getElementById("tablaCuerpo");
    //creacion de la fila
    tabla.insertAdjacentElement("afterbegin",fila);
    //creacion de la columna
    fila.insertAdjacentElement("afterbegin",columna2);
    fila.insertAdjacentElement("afterbegin",columna1);
   
   

  }

}
function borrarLista() {
    
    let elemento =document.getElementById("a0");
    
    if (elemento!=null) {
        let i=1;
        while (elemento!=null) {
        elemento.remove();
        elemento = document.getElementById("a"+i);
        i++;
        }
    }
}

function añadirNodoLlamdo() {
    console.log("añadir nodo");
    let valor=document.getElementById("valorN").value;
    if (valor != "") {
      (document.getElementById("inicioL").checked==true) ? Informacion.añadirNodoI(valor):
                                                             Informacion.añadirNodoF(valor);  
    }else{
        console.log("no se ha ingresado datos");
    }                                                   
}
function eliminarNodoLlamdo() {
    console.log("eliminar nodo");
    (document.getElementById("inicioL").checked==true) ? Informacion.eliminarNodoI():
                                                         Informacion.eliminarNodoF(); 
     console.log(Informacion);                                                                                                     
}
function consultarValorDelNodoLLamdo() {
    console.log("consultar valor");
    let posicion=document.getElementById("posicionN").value;
   if (posicion != "") {
   posicion = parseInt(posicion);

    let inputNombre = document.getElementById("valorN");
    inputNombre.value = ""+Informacion.getPosicionPuntero(posicion).valor;

    }else{
        console.log("no se ha ingresado datos");
    }                                                   
}
function eliminarNodoPosicionLlamado() {
    console.log("eliminar valor");
   let posicion=document.getElementById("posicionN").value;
   if (posicion != "") {
    posicion = parseInt(posicion);
    Informacion.removerNodoPorPosicion(posicion);
    }else{
        console.log("no se ha ingresado datos");
    }                                                   
}
function eliminarPorVolorLlamdo() {
    console.log("eliminar valor por valor");
    let valor=document.getElementById("valorN").value;
    if (valor != "") {
    Informacion.removerNodoPorValor(valor);
     }else{
         console.log("no se ha ingresado datos");
     }   
}
function modificarValorDeterminadoLlamdo() {
    console.log("Modificar Valor Determinado");

    let posicion=document.getElementById("posicionN").value;
    let valor=document.getElementById("valorN").value;
    if (valor != "") {
         if (posicion != "") {
            posicion = parseInt(posicion);
            Informacion.modificarValorNodo(posicion,valor);

         }else{console.log("no se ha ingresado posición");}   
    }else{console.log("no se ha ingresado datos");}   
}
function añadirNodoEnPosicionLlamdo() {
  //isertar  
  console.log("añadir nodo en posición");

  let posicion=document.getElementById("posicionN").value;
  let valor=document.getElementById("valorN").value;
  if (valor != "") {
       if (posicion != "") {
          posicion = parseInt(posicion);
          Informacion.insertarNodoPorPosicion(valor,posicion);

       }else{console.log("no se ha ingresado posición");}   
  }else{console.log("no se ha ingresado datos");}   

}
function invertirLlamado() {
    console.log("Invertir");
    Informacion.invertir();
}









//-------------------------------------------img-----------------------------------------------------
function cargueImagenes(eventoSeleccionar) {
    let files = eventoSeleccionar.target.files;
    for (let i = 0, f; f = files[i]; i++) {

        /* ----agrega al arreglo de imagenes----- */
        imagenes.push(files[i].name);


        /* Cargue de sólo imagenes */
        if (!f.type.match('image.*')) {
            continue;
        }
        let cargueImagenes = new FileReader;
        /* Capturar información de la imagen: tipo, nombre, tamaño */
        cargueImagenes.onload = (function(imagenSeleccionada) {
            return function(imagen) {
                /* Crear etiqueta HTML en el DOM */
                let span = document.createElement('span');
                /* Escribimos en la etiqueta span: cargamos la imagen */
                span.innerHTML = ['<img class ="thumb" width ="100px" heigth="100px" src= " ',
                    imagen.target.result, ' "title=" ', escape(imagenSeleccionada.name),
                    ' "/> '
                ].join('');
                document.getElementById("list").insertBefore(span, null);
            };
        })(f);
        /* Función de la API FileReader
        Hace la lectura del contenido de un objeto Blob
        Trabaja con el atributo result que devuelve los datos del fichero, en este caso la imagen seleccionada */
        cargueImagenes.readAsDataURL(f);
    }
 
}
//lamado de la funcion
document.getElementById('files').addEventListener('change', cargueImagenes, false);


//---------------------------------------txt---------------------------------------------------
/* Cargue de archivo txt */
let input = myInput;
let infoArchivo = new FileReader;
input.addEventListener('change', onChange);
function onChange(event) {
    /* event es el evento clic de selección */
    /* targer es el tipo de archivo seleccionado */
    /* files[0] sólo permite el cargue de un archivo */
    let archivo = event.target.files[0];
    /* readAsText se utiliza para leer el contenido de ls archivos */
    infoArchivo.readAsText(archivo);
    

    /* Permite ejecutar la función onload despues de cargar el archivo */
    infoArchivo.onload = onLoad;
}
/* Lectura del contenido del archivo */
function onLoad() {
    let contenidoTxt = infoArchivo.result;
    
    let lecturaLineaPorLina = contenidoTxt.split('\n');
    let contenido = "";
   
    for (let i = 0; i < lecturaLineaPorLina.length; i++) {
        contenido = lecturaLineaPorLina[i];
        txts.push(contenido);
        document.getElementById("ver").innerHTML += contenido+"\n";
    }
    
   
}

//--------------------------------------nodos--------------------------------------------
class NodeClass {

    constructor(valor) {
        this.valor = valor;
        this.next = null;
    }
}
class listasSimples {
    constructor() {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
        /* Métodos de la lista: añadir, eliminar, buscar, actualizar valor */
    añadirNodoF(valor) {
        /* Instancia de la clase NodeClass */
        let newNode = new NodeClass(valor);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    añadirNodoI(valor) {
        let newNode = new NodeClass(valor);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    eliminarNodoF() {
        if (!this.head) return undefined;
        let nodoVisitado = this.head;
        let nuevaColaLista = nodoVisitado;
        while (nodoVisitado.next) {
            nuevaColaLista = nodoVisitado;
            nodoVisitado = nodoVisitado.next;
        }
        this.tail = nuevaColaLista;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return nodoVisitado;
    }
    eliminarNodoI() {
        if (!this.head) return undefined;
        let cabezaactual = this.head;
        this.head = cabezaactual.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return cabezaactual;
    }

    getPosicionPuntero(index) {
        if (index < 0 || index >= this.length) return null;
        let contadorPuntero = 0;
        let nodoVisitado = this.head;
        while (contadorPuntero !== index) {
            nodoVisitado = nodoVisitado.next;
            contadorPuntero++;
        }
        return nodoVisitado;
    }

    modificarValorNodo(index, valor) {
        let encontrarNodo = this.getPosicionPuntero(index);
        if (encontrarNodo) {
            encontrarNodo.valor = valor;
            return true;
        }
        return false;
    }

    removerNodoPorPosicion(index) {
        let nodoVisitad = this.head;
        let nodoAnteriorAlVisitado = null;
        if (index < 0 || index >= this.length) return null;
        if (index === 0) this.head = nodoVisitad.next;
        else {
            for (let i = 0; i < index; i++) {
                nodoAnteriorAlVisitado = nodoVisitad;
                nodoVisitad = nodoVisitad.next;
            };
            nodoAnteriorAlVisitado.next = nodoVisitad.next;
        };
        this.length--;
        return nodoVisitad.valor;
    }

    insertarNodoPorPosicion(valor, index) {
        let newNode = new NodeClass(valor);
        let nodoVisitado = this.head;
        let nodoAnteriorAlVisitado;
        if (index < 0 || index >= this.length) return null;
        if (index === 0) this.añadirNodoI(valor);
        else {
            for (let i = 0; i < index; i++) {
                nodoAnteriorAlVisitado = nodoVisitado;
                nodoVisitado = nodoVisitado.next;
            }
            newNode.next = nodoVisitado;
            nodoAnteriorAlVisitado.next = newNode;
        }
        this.length++;
    }
    removerNodoPorValor(valor) {
        let nodoVisitado = this.head;
        let nodoAnteriorAlVisitado = null;
        while (nodoVisitado !== null) {
            if (nodoVisitado.valor === valor) {
                if (!nodoAnteriorAlVisitado)
                    this.head = nodoVisitado.next;
                else
                    nodoAnteriorAlVisitado.next = nodoVisitado.next;
                this.length--;
                return nodoVisitado.valor;
            }
            nodoAnteriorAlVisitado = nodoVisitado;
            nodoVisitado = nodoVisitado.next;
        }
        return null;
    }

    invertir(){
        let previous = null;
		let current = this.head;
		let future;
        
		while (current != null) {
            if (previous==null) {
                this.tail = current;
            }
        
			future = current.next;
			current.next = previous;
			previous = current;
			current =future;
          
		}
  
		this.head = previous;
	}

    /* Implementar método reverse (invertir nodos de la lista) */
    /* Implementar función para llamar método según selección del user en la lista desplagable */
    /* Crear la lista simple a partir de los valores ingresados por el usuario, 
    en la opción por default y del campo input */

    imprimirArrayList() {
        let arregloNodos = [];
        let nodoVisitado = this.head;
        while (nodoVisitado) {
            arregloNodos.push(nodoVisitado.valor);
            nodoVisitado = nodoVisitado.next;
            
        }
       return arregloNodos;
    }
}


var Informacion = new listasSimples();
Informacion.añadirNodoF("1");
Informacion.añadirNodoF("2");
document.getElementById("listaPorDefault").innerHTML =Informacion.imprimirArrayList();
console.log(Informacion);



/* instClass.eliminarNodoI();
instClass.eliminarNodoF(); 
instClass.modificarValorNodo(1, "Dos");*/
/* instClass.removerNodoPorPosicion(1); /* Elimina nodo con valor 3 
console.log(instClass);

instClass.insertarNodoPorPosicion("Nuevo nodo", 0);
instClass.removerNodoPorValor(3);

instClass.imprimirArrayList();
instClass.imprimirArrayList(); */