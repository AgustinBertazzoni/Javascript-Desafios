// 5TO DESAFIO


let container = document.querySelector(".container");

let cuotas = [];

let mapeo2 = [];

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

let decision;


const prestamos = () => {
    let texto = "";
    for(const p of cuotas){
        texto += `$${p.monto} - $${p.devolucion} \n`;
    }
    let usuario = prompt(`Ingrese el valor que desea de prestamo, el siguiente es el total que tiene que devolver \n${texto}`);

    return usuario;
};




const eleccion = () => {
    let elejido = cuotas.find((e) => e.monto === decision);
}


mapeo2.push(eleccion);


const mostrar = () => {
    const div = document.createElement("div");
    div.className = "caja";
    container.appendChild(div);
    
    let mapeo = mapeo2.map((e) => `<div>
    <h3>El valor del prestamo es de $${e.monto}</h3>
    <h3>El valor a devolver es de $${e.devolucion}</h3>
    </div>`);

    div.innerHTML = mapeo.join("");
    
}






decision = prestamos();
eleccion();
mostrar();




















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





