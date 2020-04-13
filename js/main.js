var fecha = new Date();
var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
var dias = new Array("Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo");

function fechaDeHoy() {
    var tituloFiestas = document.getElementById("tituloFiestas");
    var btnIrFiestas = document.querySelector(".btn-Blanco");
    tituloFiestas.innerHTML = 'Fiestas para el ' + dias[fecha.getDay() - 1] + ', ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()];
    btnIrFiestas.innerHTML = 'Ver todas las fiestas del ' + dias[fecha.getDay() - 1] + ' <i class="fas fa-arrow-right flechaApuntarme"></i>';

}
fechaDeHoy();

function diaActivo() {
    switch (fecha.getDay()) {
        case 0:
            console.log('Domingo');
            var diaDomingo = document.getElementById("diaDomingo");
            diaDomingo.classList.add("activeDia");
            break;
        case 1:
            console.log('Lunes');
            var diaLunes = document.getElementById("diaLunes");
            diaLunes.classList.add("activeDia");
            break;
        case 2:
            console.log('Martes');
            var diaMartes = document.getElementById("diaMartes");
            diaMartes.classList.add("activeDia");
            break;
        case 3:
            console.log('Miercoles');
            var diaMiercoles = document.getElementById("diaMiercoles");
            diaMiercoles.classList.add("activeDia");
            break;
        case 4:
            console.log('Jueves');
            var diaJueves = document.getElementById("diaJueves");
            diaJueves.classList.add("activeDia");
            break;
        case 5:
            console.log('Viernes');
            var diaViernes = document.getElementById("diaViernes");
            diaViernes.classList.add("activeDia");
            break;
        case 6:
            console.log('Sábado');
            var diaSabado = document.getElementById("diaSabado");
            diaSabado.classList.add("activeDia");
            break;
    }
}
diaActivo();