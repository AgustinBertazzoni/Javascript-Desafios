// 4TO DESAFIO




let cuotas = [];

class Banco {
    constructor(monto, cuota, devolucion){
        this.monto = monto;
        this.cuota = cuota;
        this.devolucion = devolucion;
    }
}

const opcion1 = new Banco("10000", "12", "12000");
const opcion2 = new Banco("20000", "24", "25000");
const opcion3 = new Banco("30000", "36", "40000");


cuotas.push(opcion1, opcion2, opcion3);


const prestamos = () => {
    cuotas.forEach((cuota) => {
        console.log(`El valor del prestamo es de: $${cuota.monto} y el valor a devolver es de: $${cuota.devolucion}`);
    });
};


const valorFinal = () => {
    let usuario = prompt("Ingrese el valor del prestamo que desea");
    for(const cuota of cuotas){
    
        if(usuario == cuota.monto){
           console.log(`El valor que tiene que devolver es de: $${cuota.devolucion}`);
        }
    }
}


prestamos();
valorFinal();



















/*
console.log("Estos son los prestamos que brindamos: ");
for(let prestamos of cuotas){
    console.log("el valor del prestamo es de " + prestamos.monto + ", las cuotas son de " + prestamos.cuota + 
     ", y el monto a devoler es de " + prestamos.devolucion);
}


let usuario = prompt("Escriba el monto que desee de prestamo");
for(let prestamos of cuotas){
    
    if(usuario == prestamos.monto){
        alert("el monto que deve devolver es de " + prestamos.devolucion);
    }
}
*/





