
var imagenes1 = new Array()



imagenes1[1]=document.getElementById("a");
imagenes1[2]=document.getElementById("b");
imagenes1[3]=document.getElementById("c");
imagenes1[4]=document.getElementById("d");
imagenes1[5]=document.getElementById("e");
imagenes1[6]=document.getElementById("f");
 
console.log(console.log(document.getElementById("desc").checked));
console.log(console.log(document.getElementById("asc").checked));
var imgSeleccionada=document.getElementById("algoritmoSeleccionado"); 
var imgAux = imgSeleccionada.options[imgSeleccionada.selectedIndex].value;
console.log(imgAux)
    

//burbuja---------------------------
function algoritmoBurbujaDes(lista=new Array()){
 console.log("su algoritomo es burbuja des");
 var aux=0;
for (let k = 1; k < lista.length; k++) {
    for (let i = 0; i < (lista.length-k) ; i++) {
        if (lista[i] < lista[i + 1]) {
            aux = lista[i];
            lista[i] = lista[i + 1];
            lista[i + 1] = aux;
        }
        
    }
    
}
return lista;

}
function algoritmoBurbujaAsc(lista=new Array()){
 console.log("su algoritomo es burbuja asc");
 
 var aux=0;

for (let k = 1; k < lista.length; k++) {
    for (let i = 0; i < (lista.length-k) ; i++) {
        if (lista[i] > lista[i + 1]) {
            aux = lista[i];
            lista[i] = lista[i + 1];
            lista[i + 1] = aux;
        }
        
    }
    
}

return lista;

}

//insecíon---------------------------
function algoritmoInserciónDes(lista=new Array()){
    console.log("su algoritomo es insecíon des ");

let j,aux;

for (let i = 0; i < lista.length; i++) {
    j=i;
    aux = lista[i];
    while (j > 0 && lista[j-1] < aux ) {
        lista[j] = lista [ j-1];
        j--;
    }
    lista[j]=aux;
    
}
return lista;

}
function algoritmoInserciónAsc(lista=new Array()){
    console.log("su algoritomo es insecíon asc ");
    let j,aux;

    for (let i = 0; i < lista.length; i++) {
        j=i;
        aux = lista[i];
        while (j > 0 && lista[j-1] > aux ) {
            lista[j] = lista [ j-1];
            j--;
        }
        lista[j]=aux;
        
    }
    return lista


}


//Seleccíon---------------------------
function algoritmoSelecciónDes(lista=new Array()){
    console.log("su algoritomo es selección des ");

    for (let i = 0; i < lista.length; i++) {
        let min = i ;
        for (let j = i+1; j < lista.length; j++) {
                 if(lista[j] > lista[min]){
                    min=j; 

                  }

            }
            if (min != i) {
                // Swapping the elements
                let aux = lista[i]; 
                lista[i] = lista[min];
                lista[min] = aux;      
           }
            
        }
        return lista;

}

function algoritmoSelecciónAsc(lista=new Array()){
    console.log("su algoritomo es seleccíon asc ");
    for (let i = 0; i < lista.length; i++) {
        let min = i ;
        for (let j = i+1; j < lista.length; j++) {
                 if(lista[j] < lista[min]){
                    min=j; 

                  }

            }
            if (min != i) {
                // Swapping the elements
                let aux = lista[i]; 
                lista[i] = lista[min];
                lista[min] = aux;      
           }
            
        }
        return lista;

}


//seleccionar Metodo de ordenamiento
function showSelected(lista=new Array()){

    let Seleccion = document.getElementById("algoritmoSeleccionado");
    var seleccionDato = Seleccion.options[Seleccion.selectedIndex].value;

    

    if      ((seleccionDato=="1") && (document.getElementById("desc").checked)){
        lista=algoritmoBurbujaDes(lista);
        cambiaImg(lista);
        return lista;
    }else if ((seleccionDato=="1") && (document.getElementById("asc").checked)) {
       algoritmoBurbujaAsc(lista);
       cambiaImg(lista);
       return lista;
    }else if ((seleccionDato=="2") && (document.getElementById("desc").checked)) {
        algoritmoInserciónDes(lista);
        cambiaImg(lista);
        return lista;
     }else if ((seleccionDato=="2") && (document.getElementById("asc").checked)) {
        algoritmoInserciónAsc(lista);
        cambiaImg(lista);
        return lista;
     }else if ((seleccionDato=="3") && (document.getElementById("desc").checked)) {
        algoritmoSelecciónDes(lista);
        cambiaImg(lista);
        return lista;
     }else if ((seleccionDato=="3") && (document.getElementById("asc").checked)) {
        algoritmoSelecciónAsc(lista);
        cambiaImg(lista);
        return lista;
     }else{
        console.log("no se ha seleccionado una opcion");

     }

}

function Orden(){

    var imgSeleccionada=document.getElementById("algoritmoSeleccionado"); 
    var imgAux = imgSeleccionada.options[imgSeleccionada.selectedIndex].value;
    
console.log("reinicio");
    var lista = [1,2,3,4,5,6];
    
    if((imgAux=="0") && (document.getElementById("desc").checked==false) && (document.getElementById("asc").checked==false) ){

        
        var lista = lista.sort(function() {return Math.random() - 0.5});
        cambiaImg(lista);
        

    }
    
    if(imgAux!="0"){
        showSelected(lista);
    }

 
    



}





//combiar datos y aleatorizar 
function cambiaImg(lista=new Array()){
    var imgSeleccionada=document.getElementById("imgSelect"); 
    var imgAux = imgSeleccionada.options[imgSeleccionada.selectedIndex].value;

console.log(lista);
 var i=0;
    if(imgAux=="1"){
    
        imagenes1.forEach(element => {
            element.src="img/"+lista[lista.length-i-1]+".png";
            i++;
        });
    }
var i=0;
    if(imgAux=="2"){
    
        imagenes1.forEach(element => {
            element.src="img/a"+lista[i]+".png";
            i++;
        });
    }
var i=0;
    if(imgAux=="3"){
    
        imagenes1.forEach(element => {
            element.src="img/b"+lista[i]+".png";
            i++;
        });
    }
   
}


