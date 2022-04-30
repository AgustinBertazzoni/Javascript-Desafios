// 8VO DESAFIO


let valorUsuario = document.querySelector("#seleccionarPrestamo");
let valorMostrar = document.querySelector("#valorFinal");



function calcular() {
    valorUsuario.addEventListener("change", () => {
        let valor = valorUsuario.value;

        valorMostrar.innerHTML = `El monto que tiene que devolver, con el porcentaje incluido es de: ${valor * 1.21}`;

        localStorage.setItem("info", JSON.stringify(valor * 1.21));

        valor === "0" ? Swal.fire({
            title: "Error!",
            text: "Debe ingresar un numero que no sea 0",
            icon: "error",
            confirmButtonText: "OK"
        }) : valor = valorUsuario.value;

    })


}


calcular()







/**/














/*
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




const prestamos = () => {
    let texto = "";
    for(const p of cuotas){
        texto += `$${p.monto} - $${p.devolucion} \n`;
    }
    let usuario = prompt(`Ingrese el valor que desea de prestamo, el siguiente es el total que tiene que devolver \n${texto}`);

    return usuario;
};




const eleccion = () => {
    let elejido = cuotas.find((e) => e.monto == decision);

    return elejido;
}


mapeo2.push(eleccion);


const mostrar = (ele) => {
    const div = document.createElement("div");
    div.className = "caja";
    container.appendChild(div);
    
    div.innerHTML = `<div>
    <h3>El valor del prestamo es de $${ele.monto}</h3>
    <h3>El valor a devolver es de $${ele.devolucion}</h3>
    </div>`};

    
    







decision = prestamos();
let ele = eleccion();
mostrar(ele);


*/

















