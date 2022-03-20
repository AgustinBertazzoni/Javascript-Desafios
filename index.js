//Crear una lista de alumnos

let alumnos = prompt("Ingrese el nombre del alumno (si es alumno) o indique si es profesor");
let ingresados = "";

while (alumnos != "profesor"){
    ingresados += alumnos + "\n";
    alumnos = prompt("Ingresar el nombre del siguiente alumno")
}
alert(ingresados);




//Tabla

let numeroTabla = parseInt(prompt("Ingrese la tab,a de que numero desea saber"));

for (let variable = 0; variable <= 10; variable++){
    console.log("Multiplicamos: " + numeroTabla + "x" + variable + " = " + numeroTabla * variable);
}
