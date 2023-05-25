const textarea = document.querySelector(".text-area");
const mensaje  = document.querySelector(".mensaje");

function btnEncriptar(){                                            //segunso paso para ejecutar BOTON//
    const textoEncriptado = encriptar(textarea.value)
    mensaje.value         = textoEncriptado
    textarea.value = "";
    mensaje.style.backgroundImage ="none"
}

function encriptar( stringEncriptada){                             //primer paso hasta return//
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufa"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes (matrizCodigo[i][0])){  //verificar las letras ingresadas//

            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]) //remplazar//

        }
            
    }
    return stringEncriptada

}
//

function btnDesencriptar(){                                            //segunso paso para ejecutar BOTON//
    const textoDesencriptado = desencriptar(textarea.value)
    mensaje.value         = textoDesencriptado
    textarea.value = "";
    
}


function desencriptar( stringDesencriptada){                             //primer paso hasta return//
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufa"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes (matrizCodigo[i][1])){  //verificar las letras ingresadas//

            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]) //remplazar//

        }
            
    }
    return stringDesencriptada
}

function copiarDescriptador(){
    var contenido = document.getElementById("textarea")
    contenido.select();
    document.execCommand("copy");

    
    
}
