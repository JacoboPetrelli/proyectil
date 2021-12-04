velocidad = Number(prompt("Cual es la velocidad inicial con la que el proyectil fue lanzado(m/s)"))
posicion = Number(prompt("A que altura desea que el proyectil llegue en m?"))
let tiempo = (0-velocidad)/(0-9.8)
let desplazamiento = (velocidad*tiempo)-((9.8*tiempo*tiempo)/2)
if (posicion <= desplazamiento) {
    situacion= "El proyectil si logra llegar a la altura deseada"
} else{
    situacion= "El proyectil no logra llegar a la altura deseada"
}
document.getElementById("Respuesta").innerHTML = situacion