var fecha = new Date();
var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
var dias = new Array("Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo");

function diaActivo() {
    var tituloFiestas = document.getElementById("tituloFiestas");
    var btnIrFiestas = document.querySelector(".btn-Blanco");
    switch (fecha.getDay()) {
        case 0:
            console.log('Domingo');
            var diaDomingo = document.getElementById("diaDomingo");
            diaDomingo.classList.add("activeDia");
            tituloFiestas.innerHTML = 'Fiestas para el Domingo , ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()];
            btnIrFiestas.innerHTML = 'Ver todas las fiestas del Domingo <i class="fas fa-arrow-right flechaApuntarme"></i>';
            break;
        case 1:
            console.log('Lunes');
            var diaLunes = document.getElementById("diaLunes");
            diaLunes.classList.add("activeDia");
            tituloFiestas.innerHTML = 'Fiestas para el Lunes , ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()];
            btnIrFiestas.innerHTML = 'Ver todas las fiestas del Lunes <i class="fas fa-arrow-right flechaApuntarme"></i>';
            break;
        case 2:
            console.log('Martes');
            var diaMartes = document.getElementById("diaMartes");
            diaMartes.classList.add("activeDia");
            tituloFiestas.innerHTML = 'Fiestas para el Martes , ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()];
            btnIrFiestas.innerHTML = 'Ver todas las fiestas del Martes <i class="fas fa-arrow-right flechaApuntarme"></i>';
            break;
        case 3:
            console.log('Miercoles');
            var diaMiercoles = document.getElementById("diaMiercoles");
            diaMiercoles.classList.add("activeDia");
            tituloFiestas.innerHTML = 'Fiestas para el Miercoles , ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()];
            btnIrFiestas.innerHTML = 'Ver todas las fiestas del Miercoles <i class="fas fa-arrow-right flechaApuntarme"></i>';
            break;
        case 4:
            console.log('Jueves');
            var diaJueves = document.getElementById("diaJueves");
            diaJueves.classList.add("activeDia");
            tituloFiestas.innerHTML = 'Fiestas para el Jueves , ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()];
            btnIrFiestas.innerHTML = 'Ver todas las fiestas del Jueves <i class="fas fa-arrow-right flechaApuntarme"></i>';
            break;
        case 5:
            console.log('Viernes');
            var diaViernes = document.getElementById("diaViernes");
            diaViernes.classList.add("activeDia");
            tituloFiestas.innerHTML = 'Fiestas para el Viernes , ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()];
            btnIrFiestas.innerHTML = 'Ver todas las fiestas del Viernes <i class="fas fa-arrow-right flechaApuntarme"></i>';
            break;
        case 6:
            console.log('Sábado');
            var diaSabado = document.getElementById("diaSabado");
            diaSabado.classList.add("activeDia");
            tituloFiestas.innerHTML = 'Fiestas para el Sábado , ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()];
            btnIrFiestas.innerHTML = 'Ver todas las fiestas del Sábado <i class="fas fa-arrow-right flechaApuntarme"></i>';
            break;
    }
}
diaActivo();