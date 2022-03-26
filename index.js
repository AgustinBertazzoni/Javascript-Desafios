
//2DO DESAFIO


alert("Bienvenido, para solicitar su prestamo ingrese aceptar");

let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas en las que desea pagar el prestamo (Maximo 36 cuotas)."));

function iva (total){
    if(cuotas <= 12){
        alert("Usted debe pagar de prestamo: " + (total * 1.5));
    }else if(cuotas >= 13 && cuotas <= 24){
        alert("Usted debe pagar de prestamo: " + (total * 1.8));
    }else if (cuotas >= 25 && cuotas <=36){
        alert("Usted debe pagar de prestamo: " + (total * 2));
    }else{
        alert("Usted solicito una cantidad de cuotas no disponible");
    }
}

let monto = parseInt(prompt("Ingrese un monto que desea solicitar como prestamo"));

iva(monto);