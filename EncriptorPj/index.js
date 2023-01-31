const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const btnCopiar = document.getElementById("btnCopiar");
const txtAreaInput = document.getElementById("txtAreaEntrada");
const llaveEncriptar = ["enter","imes","ai","ober","ufat"];
const llaveDesencriptar = ["e","i","a","o","u"];

btnEncriptar.addEventListener("click",encriptar);
btnDesencriptar.addEventListener("click",desencriptar);
btnCopiar.addEventListener("click",copiar);
txtAreaInput.addEventListener("keypress",letrasMinusculas);

function encriptar(){

    const txtAreaEntrada = document.getElementById("txtAreaEntrada").value;
    const txtAreaSalida = document.getElementById("txtAreaSalida");    
    const arrEntrada = txtAreaEntrada.split('');
    let div01 = document.getElementById("column-1-2-1-1");
    let div02 = document.getElementById("column-1-2-1-2");
    let txtArea02 = document.getElementById("txtAreaSalida");
    let acumulador = "";
    let flagAcumulador = true;

    if (txtAreaEntrada == ""){

        alert("No existe un mensaje para encriptar!");
        return false;

    }

    div01.className = "column-1-2-1-11";
    div02.className = "column-1-2-1-22";
    txtArea02.className = "txtAreaSalida-1";  

    for (let xPosicion = 0; xPosicion < arrEntrada.length; xPosicion++){

        flagAcumulador=true;

        for (let yPosicion = 0; yPosicion < llaveDesencriptar.length; yPosicion++){

            if (arrEntrada[xPosicion] == llaveDesencriptar[yPosicion]) {
                
                flagAcumulador = false;
                acumulador = acumulador + llaveEncriptar[yPosicion];  

            }

        }
        
        if (flagAcumulador){  

            acumulador = acumulador + arrEntrada[xPosicion];

        }

    }

    document.getElementById("txtAreaEntrada").value="";
    
    return txtAreaSalida.innerText = acumulador;

}

function desencriptar(){

    const txtAreaSalida = document.getElementById("txtAreaSalida");
    let txtAreaEntrada = document.getElementById("txtAreaEntrada").value;
    let div01 = document.getElementById("column-1-2-1-1");
    let div02 = document.getElementById("column-1-2-1-2");
    let txtArea02 = document.getElementById("txtAreaSalida");

    if (txtAreaEntrada == ""){

        alert("No existe un mensaje para desencriptar!");
        return false;

    }

    div01.className = "column-1-2-1-11";
    div02.className = "column-1-2-1-22";
    txtArea02.className = "txtAreaSalida-1";  

    for (let posicion = 0; posicion < llaveEncriptar.length; posicion++){

        while(txtAreaEntrada.includes(llaveEncriptar[posicion])){

            txtAreaEntrada = txtAreaEntrada.replace(llaveEncriptar[posicion],llaveDesencriptar[posicion]);

        }        

    }
    
    document.getElementById("txtAreaEntrada").value="";

    return txtAreaSalida.innerText = txtAreaEntrada;

}

function copiar(){

    const txtAreaSalida = document.getElementById("txtAreaSalida").value; 

    if (txtAreaSalida == ""){

        alert("No existe un mensaje para copiar!");

    } else {

        navigator.clipboard.writeText(txtAreaSalida).then(() => {

            alert("Mensaje copiado!");

        });

    }

}

function letrasMinusculas(evento){

    const key = evento.which;
    const texto = String.fromCharCode(key);
    const letras = "abcdefghijklmnñopqrstuvwxyz";
    const caracteres_especiales = [13];
    let tecla_especial = false;

    for (let posicion = 0; posicion < caracteres_especiales.length; posicion++) {

        if (key == caracteres_especiales[posicion]){

            tecla_especial = true;
            break;

        }

    }

    if (letras.indexOf(texto) == -1 && !tecla_especial){

        evento.preventDefault();  
        alert("Solo puede ingresar letras minúsculas!");

    }
    
}