
//3ER DESAFIO

//!! en el simulador de prestamos, hacer que el usuario elija una opcion de 3 o 4, que tengan el valor del prestamos que entregamos, e indique las cuotas y el valor a devolver.


let cuotas = [];

class Banco {
    constructor(monto, cuota, devolucion){
        this.monto = monto;
        this.cuota = cuota;
        this.devolucion = devolucion;
    }
}

const opcion1 = new Banco("10000", "12", "12000");
cuotas.push(opcion1);

const opcion2 = new Banco("20000", "24", "25000");
cuotas.push(opcion2);

const opcion3 = new Banco("30000", "36", "40000");
cuotas.push(opcion3);



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












